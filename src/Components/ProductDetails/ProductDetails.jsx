import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import AddToCart from "./../AddToCart/AddToCart";

function ProductDetails() {
  const { category, id } = useParams();
  const [productDetails, setProductDetails] = useState("");
  const [relatedProduct, setRelatedProduct] = useState([]);
  console.log("productDetails", productDetails);

  function getDetails(id) {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((res) => {
        console.log("then details", res.data.data);
        setProductDetails(res.data.data);
      })
      .catch((res) => {
        console.log("catch details", res);
      });
  }

  function getAllProduct() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/products`)
      .then((res) => {
        console.log("then all product for cat", res.data.data);
        const related = res.data.data.filter(
          (product) => product.category.name === category
        );
        setRelatedProduct(related);
        console.log(related);
      })
      .catch((res) => {
        console.log("catch details", res);
      });
  }

  useEffect(() => {
    getDetails(id);
    getAllProduct();
  }, [category, id]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsDetails = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {productDetails ? (
        <div className="flex items-center my-10 ">
          <div className="w-1/4 px-2 ">
            <Slider {...settingsDetails}>
              {productDetails?.images.map((src) => (
                <img
                  key={productDetails.id}
                  src={src}
                  className="w-full  h-auto object-cover"
                  alt={productDetails.title}
                />
              ))}
            </Slider>
          </div>
          <div className="w-3/4 px-10">
            <h3 className="text-sm md:text-lg font-bold">
              {productDetails?.title}
            </h3>
            <h3 className="text-gray-500 text-md ">
              {productDetails?.description}
            </h3>
            <div className="flex justify-between items-center  mt-2    ">
              <div className="text-xs md:text-base star me-2 space-x-2">
                {Array.from({ length: 5 }, (_, index) =>
                  index < Math.round(productDetails?.ratingsAverage) ? (
                    <span key={index}>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </span>
                  ) : (
                    <span key={index}>
                      <i className="fa-solid fa-star text-gray-300"></i>
                    </span>
                  )
                )}
                <span>{productDetails?.ratingsAverage}</span>
              </div>

              <div className="bg-blue-200  rounded-md    px-2 mt-2 w-fit group/heart ">
                <i className="fa-solid fa-heart text-xs text-blue-500 group-hover/heart:text-blue-700 group-hover/heart:scale-125 transition-all duration-500"></i>
              </div>
            </div>

            <div className="price text-sm  md:text-lg md:font-medium flex justify-between my-2  lg:px-0 ">
              <span>{productDetails?.price} EGP</span>
              <span>{productDetails?.quantity} Items</span>
            </div>

            <AddToCart productId={productDetails.id} />
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {relatedProduct.length > 0 ? (
        <Slider {...settings} className="my-5  ">
          {relatedProduct.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </Slider>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default ProductDetails;
{
  /*  */
}
