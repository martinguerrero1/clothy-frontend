# Clothy Frontend

Aplicación web de Clothy, una tienda única de ropa casual para hombres y mujeres. Es la interfaz de compra y administración de catálogo: consume la API de Clothy para mostrar productos, categorías y carrito, y ofrece un panel visual para administración cuando el usuario autenticado tiene rol `admin`.

## Funcionalidades actuales

- Inicio, tienda, página institucional y catálogo con búsqueda, categorías, género, precio, orden y paginación.
- Detalle de producto, carruseles de novedades y productos más vendidos.
- Registro e inicio de sesión; persistencia local de usuario y JWT.
- Carrito: consulta, agregado, modificación de cantidades, eliminación y vaciado.
- Perfil que muestra la información almacenada en el cliente.
- Panel `admin` para métricas de catálogo, alta/edición/desactivación de productos y alta/edición/eliminación de categorías.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS 4 mediante `@tailwindcss/vite`
- React Router DOM 7
- TanStack Query
- Zustand con persistencia
- Axios
- Lucide React
- Embla Carousel React
- Sonner para notificaciones
- Radix UI Slider

Como herramientas de desarrollo se usan ESLint, Prettier, Husky, lint-staged y Commitlint.

## Instalación

Requiere Node.js y una instancia accesible de la API de Clothy.

```bash
cd clothy-frontend
npm install
```

Copiá `.env.example` como `.env` y configurá la URL de la API antes de ejecutar Vite.

## Variables de entorno

| Variable       | Uso                                                                                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_API_URL` | URL base de la API consumida por la instancia de Axios. Debe incluir el prefijo de API que corresponda a los servicios, por ejemplo el que permite llamar a `/auth`, `/products`, `/categories` y `/cart`. |

No incluyas valores sensibles en `.env`. Vite solo expone al navegador variables con prefijo `VITE_`.

## Ejecución

| Objetivo                     | Comando            |
| ---------------------------- | ------------------ |
| Desarrollo                   | `npm run dev`      |
| Generar build de producción  | `npm run build`    |
| Previsualizar el build       | `npm run preview`  |
| Ejecutar ESLint              | `npm run lint`     |
| Corregir problemas de ESLint | `npm run lint:fix` |
| Formatear archivos           | `npm run format`   |

No hay scripts de tests definidos. Vercel cuenta con una regla de rewrite a `index.html`, por lo que las rutas de la SPA se resuelven al desplegarla allí.

## Arquitectura

La aplicación se organiza por responsabilidad: las páginas componen la interfaz; los componentes reutilizan UI; los services encapsulan HTTP; los hooks conectan services con TanStack Query; y el store conserva la sesión.

```text
src/
├── actions/               # Acciones de formulario para login y registro
├── components/
│   ├── admin/             # Formularios, diálogos y estados del panel
│   ├── cart/              # Ítems y resumen del carrito
│   ├── category/          # Sección y tarjetas de categorías
│   ├── header/            # Navegación, menú y buscador
│   ├── shop/              # Grilla, filtros, cabecera y paginación
│   └── skeletons/         # Estados de carga
├── hooks/                 # Queries y mutations de productos, categorías y carrito
├── layouts/               # MainLayout y AdminLayout
├── lib/axios.ts           # Instancia HTTP e interceptores
├── pages/                 # Vistas públicas, de sesión, carrito y admin
├── router/router.tsx      # Declaración de rutas con createBrowserRouter
├── services/              # Cliente API por recurso
├── stores/authStore.ts    # Sesión persistida con Zustand
├── types/                 # Tipos de datos y UI
└── utils/productParams.ts # Conversión de query string a filtros
```

El alias `@` apunta a `src`. `main.tsx` envuelve el router con `QueryClientProvider` y monta `Toaster` de Sonner.

## Routing

`MainLayout` incluye Header y Footer, y contiene las siguientes rutas. Las rutas de `/login`, `/register` y `/admin` no usan ese layout.

| Ruta                | Página                | Protección actual                        | Descripción                                            |
| ------------------- | --------------------- | ---------------------------------------- | ------------------------------------------------------ |
| `/`                 | `HomePage`            | Pública                                  | Inicio con categorías, novedades y más vendidos.       |
| `/tienda`           | `ShopPage`            | Pública                                  | Catálogo con filtros en la URL y paginación.           |
| `/tienda/:id`       | `ProductDetailPage`   | Pública                                  | Detalle del producto activo.                           |
| `/nosotros`         | `AboutPage`           | Pública                                  | Página institucional estática.                         |
| `/login`            | `LoginPage`           | Pública                                  | Formulario de inicio de sesión.                        |
| `/register`         | `RegisterPage`        | Pública                                  | Formulario de registro.                                |
| `/perfil`           | `ProfilePage`         | Sin guard del router                     | Muestra el usuario del store si existe.                |
| `/carrito`          | `CartPage`            | Sin guard del router; la API exige token | Consulta y opera sobre el carrito autenticado.         |
| `/admin`            | `AdminDashboardPage`  | `admin`                                  | Métricas derivadas del catálogo y productos recientes. |
| `/admin/products`   | `AdminProductsPage`   | `admin`                                  | Gestión visual de productos.                           |
| `/admin/categories` | `AdminCategoriesPage` | `admin`                                  | Gestión visual de categorías.                          |

`AdminLayout` es el único guard existente: si no hay `user` persistido o `user.role !== 'admin'`, redirige a `/`. No hay un guard equivalente para `/perfil` ni `/carrito`. Los enlaces a rutas como `/forgot-password`, `/terms`, `/privacy`, `/privacidad`, `/terminos`, `/cookies` o `/shop` aparecen en componentes, pero no están declarados en el router actual y no se consideran rutas disponibles.

## Autenticación

Los formularios usan `useActionState` y acciones locales:

- `registerAction` valida en el navegador nombre, apellido, username, email, contraseña, confirmación y aceptación de términos; llama a `POST /auth/register` y redirige a `/login` cuando es exitoso.
- `loginAction` comprueba email y contraseña, llama a `POST /auth/login`, guarda `user` y `token` mediante `useAuthStore().login(...)` y redirige a `/`.
- `authStore` usa el middleware `persist` de Zustand con la clave `clothy-auth`, por lo que conserva `user`, `token` e `isAuthenticated` en el almacenamiento local del navegador.
- `AdminLayout` emplea `user.role === 'admin'` para la protección visual del panel. El Header muestra su acceso administrativo con la misma condición.

La instancia Axios inyecta `Authorization: Bearer <token>` cuando hay token y limpia el store ante una respuesta `401`. El botón de salida dentro de `AdminLayout` llama al `logout` del store. El `LogoutButton` utilizado por `ProfilePage` solo elimina la clave local `token` y navega a `/login`; no invoca la acción `logout` del store, por lo que esa pantalla no limpia el estado persistido de Zustand actualmente.

## Estado y datos

Zustand se limita al estado de autenticación. TanStack Query administra solicitudes, caché y actualización de datos remotos:

| Recurso    | Query / mutations actuales                                                                   |
| ---------- | -------------------------------------------------------------------------------------------- |
| Productos  | `useProducts`, `useProductById`, `useAddProduct`, `useModifyProduct`, `useDeactivateProduct` |
| Categorías | `useCategories`, `useAddCategory`, `useModifyCategory`, `useDeleteCategory`                  |
| Carrito    | `useCart`, `useAddToCart`, `useUpdateCartItem`, `useRemoveCartItem`, `useClearCart`          |

Las mutaciones invalidan las claves `['products']`, `['categories']` o `['cart']` según el recurso. Sonner muestra mensajes de éxito o de error para las mutaciones. Las pantallas usan skeletons o estados de error donde están implementados.

## Comunicación con el backend

`src/lib/axios.ts` crea `clothyApi` con `baseURL: import.meta.env.VITE_API_URL`. Los services son el único punto de comunicación utilizado por los hooks y acciones:

| Servicio              | Operaciones consumidas                                    |
| --------------------- | --------------------------------------------------------- |
| `auth.service.ts`     | Registro e inicio de sesión.                              |
| `product.service.ts`  | Lista, detalle, alta, modificación y desactivación.       |
| `category.service.ts` | Lista, alta, modificación y eliminación.                  |
| `cart.service.ts`     | Consulta, agregado, actualización, eliminación y vaciado. |

Las altas y ediciones de producto/categoría envían `FormData`, compatible con las rutas multipart del backend. Para productos, la interfaz permite adjuntar hasta cinco imágenes; para categorías, una imagen. En errores de Axios, varios hooks muestran `error.response.data.message` si está disponible.

## Funcionalidades por rol

### Visitante o cliente autenticado

- Explorar productos activos, ver detalle y consultar categorías.
- Buscar por texto y filtrar por categoría, género y rango de precios; cambiar orden y página en `/tienda`.
- Crear cuenta e iniciar sesión.
- Agregar productos al carrito desde tarjetas; desde el detalle se selecciona cantidad, pero esa pantalla actualmente no dispara una mutación de agregado.
- Consultar, cambiar cantidades, eliminar ítems y vaciar el carrito una vez autenticado.
- Consultar los datos de perfil que están en el store.

### Admin

- Acceder al dashboard con conteos de productos, categorías y stock calculados con los datos ya cargados.
- Crear, editar y desactivar productos desde el panel.
- Crear, editar y eliminar categorías desde el panel.

Estas capacidades de admin son controles de interfaz. La autorización efectiva de la API depende del backend, cuyo estado actual debe considerarse al desplegarla.

## UI y responsive

La interfaz usa Tailwind CSS con tokens de color, tipografía y sombras definidos en `src/index.css`; importa la fuente Plus Jakarta Sans. Los componentes aplican clases responsive de Tailwind para adaptar grillas, navegación, formularios, el menú lateral administrativo y filtros a distintos tamaños. Embla implementa los carruseles de productos y Lucide React aporta los iconos.
