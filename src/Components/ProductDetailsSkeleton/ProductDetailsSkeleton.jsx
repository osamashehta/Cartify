import Slider from "react-slick";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

function ProductDetailsSkeleton() {
  const settingsDetails = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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

  return (
    <>
      <div className="flex items-center my-10 animate-pulse">
        <div className="w-1/4 px-2">
          <Slider {...settingsDetails}>
            <div className="w-full aspect-square bg-gray-200 rounded"></div>
          </Slider>
        </div>

        <div className="w-3/4 px-10">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>

          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="w-4 h-4 bg-gray-200 rounded"></div>
              ))}
              <div className="h-4 bg-gray-200 rounded w-8 ml-2"></div>
            </div>

            <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
          </div>

          <div className="flex justify-between my-4">
            <div className="h-5 bg-gray-200 rounded w-24"></div>
            <div className="h-5 bg-gray-200 rounded w-24"></div>
          </div>

          <div className="h-12 bg-gray-200 rounded-lg w-full mt-4"></div>
        </div>
      </div>

      <Slider {...settings} className="my-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </Slider>
    </>
  );
}

export default ProductDetailsSkeleton;
