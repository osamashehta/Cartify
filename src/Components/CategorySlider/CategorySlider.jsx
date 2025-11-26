import axios from "axios";
import Slider from "react-slick";
import CategorySliderSkeleton from "../CategorySliderSkeleton/CategorySliderSkeleton";
import { useQuery } from "@tanstack/react-query";

function CategorySlider({ handleCategory }) {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  function getCategory() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  if (isLoading) {
    return <CategorySliderSkeleton />;
  }
  return (
    <>
      <Slider {...settings} className="my-5">
        {data?.data.data.map((category) => (
          <div key={category._id} onClick={() => handleCategory(category._id)}>
            <img
              src={category.image}
              className=" h-[200px] object-cover w-full"
              alt={category.name}
            />
            <h4 className="text-sm text-center font-bold my-2">
              {category.name}
            </h4>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default CategorySlider;
