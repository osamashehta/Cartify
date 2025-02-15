import { Link } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddToWishList from "../AddToWishList/AddToWishList";

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
          <AddToWishList productId={product.id} />

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
