import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";

function Card({ product, responsive }) {
  return (
    <>
      <div
        className={`${responsive}   p-2  my-1  group/button  overflow-hidden `}
      >
        <div className="inner h-full p-2  rounded-md  hover:border  hover:border-blue-600 transition-all duration-300 hover:shadow hover:shadow-blue-400 relative">
          <Link to={`/productdetails/${product?.category.name}/${product?.id}`}>
            <img src={product?.imageCover} alt={product?.title} />
            <h3 className="text-xs md:text-sm text-blue-500 text-center">
              {product?.category.name}
            </h3>
            <h3 className="text-sm md:text-base font-medium text-center line-clamp-1">
              {product?.title}
            </h3>
            <div className="flex justify-center items-center  text-xs   mt-1 md:px-4  ">
              <div className="star me-2 space-x-2">
                {Array.from({ length: 5 }, (_, index) =>
                  index < Math.round(product?.ratingsAverage) ? (
                    <span key={index}>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </span>
                  ) : (
                    <span key={index}>
                      <i className="fa-solid fa-star text-gray-300"></i>
                    </span>
                  )
                )}
                <span>{product?.ratingsAverage}</span>
              </div>

              <div className="bg-blue-200  rounded-md py-1 px-2 mt-1 w-fit group/heart absolute top-[0%] right-[2%]">
                <i className="fa-solid fa-heart text-blue-500 group-hover/heart:text-blue-700 group-hover/heart:scale-125 transition-all duration-500"></i>
              </div>
            </div>
            <div className="price text-xs md:text-base  m-1  flex justify-between  ">
              <span>
                {product?.price}{" "}
                <span className=" uppercase font-thin">egp</span>
              </span>
              <span>
                {product?.quantity}{" "}
                <span className=" uppercase font-thin">items</span>
              </span>
            </div>
          </Link>

          <AddToCart
            hidden={
              "translate-y-[150%] opacity-0 group-hover/button:opacity-100  group-hover/button:translate-y-0  transition-all duration-500"
            }
            productId={product.id}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
