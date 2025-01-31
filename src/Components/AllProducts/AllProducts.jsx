import Card from "../Card/Card";
import Loader from "../Loader/Loader";
function AllProducts({ data, isLoading }) {
  if (isLoading) {
    return <Loader />;
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
