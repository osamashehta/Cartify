import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

function AllProducts({ data, isLoading }) {
  if (isLoading) {
    return (
      <div className="flex flex-wrap mt-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CardSkeleton key={index} responsive={` w-2/4 sm:w-2/4  lg:w-1/5`} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap  mt-10">
        {data?.map((product) => (
          <Card
            product={product}
            key={product.id}
            responsive={` w-2/4 sm:w-2/4  lg:w-1/5`}
          />
        ))}
      </div>
    </>
  );
}

export default AllProducts;
