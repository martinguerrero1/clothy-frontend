export function DetailProductGallerySkeleton() {
  return (
    <div className="flex gap-4">
      {/* Thumbnail skeletons */}
      <div className="flex w-20 flex-col gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="aspect-square animate-pulse rounded-md bg-gray-500" />
        ))}
      </div>

      {/* Main image skeleton */}
      <div className="aspect-[4/5] flex-1 animate-pulse rounded-md bg-gray-500" />
    </div>
  );
}
