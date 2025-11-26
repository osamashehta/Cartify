import Slider from "react-slick";

function CategorySliderSkeleton() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <Slider {...settings} className="my-5">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse px-1">
          <div className="h-[200px] bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto my-2"></div>
        </div>
      ))}
    </Slider>
  );
}

export default CategorySliderSkeleton;
