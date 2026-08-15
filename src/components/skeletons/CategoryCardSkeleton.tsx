function CategoryCardSkeleton({ layout }: { layout: string }) {
  return (
    <div
      className={`
        group relative min-h-55 overflow-hidden rounded-2xl  bg-gray-500 animate-pulse
        ${layout}
      `}
    ></div>
  );
}

export default CategoryCardSkeleton;
