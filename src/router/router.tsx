import { createBrowserRouter } from 'react-router';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import MainLayout from '../layouts/MainLayout';
import ShopPage from '@/pages/ShopPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import CartPage from '@/pages/CartPage';
import AdminLayout from '@/layouts/AdminLayout';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage';
import AdminProductsPage from '@/pages/admin/AdminProductsPage';
import AdminCategoriesPage from '@/pages/admin/AdminCategoriesPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/tienda',
        element: <ShopPage />,
      },
      {
        path: '/tienda/:id',
        element: <ProductDetailPage />,
      },
      {
        path: '/carrito',
        element: <CartPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: 'products',
        element: <AdminProductsPage />,
      },
      {
        path: 'categories',
        element: <AdminCategoriesPage />,
      },
    ],
  },
]);
