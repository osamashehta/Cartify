function CardSkeleton({ responsive }) {
  return (
    <div className={`${responsive} p-2 my-1 overflow-hidden`}>
      <div className="inner h-full p-2 rounded-md border border-gray-200 relative animate-pulse">
        <div className="w-full aspect-square bg-gray-200 rounded mb-2"></div>

        <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-2"></div>

        <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>

        <div className="flex justify-center items-center mt-1 mb-2">
          <div className="flex space-x-1 me-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-3 h-3 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-3 bg-gray-200 rounded w-8"></div>
        </div>

        <div className="flex justify-between m-1">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
