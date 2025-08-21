export default function SkeletonCark() {
  return (
    <div className="border rounded-lg p-4 animate-pulse bg-gray-200 h-96">
      <div className="h-32 bg-gray-300 mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-8 bg-gray-300 rounded w-1/3 mt-4"></div>
    </div>
  );
}
