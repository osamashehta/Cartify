import Slider from "react-slick";
import slide1 from "../../assets/slider-image-1.jpeg";
import slide2 from "../../assets/slider-image-2.jpeg";
import slide3 from "../../assets/slider-image-3.jpeg";
import banner1 from "../../assets/grocery-banner.png";
import banner2 from "../../assets/grocery-banner-2.jpeg";

function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <div className="flex flex-wrap  my-8">
        <div className="w-3/4 ">
          <Slider {...settings}>
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
            <img
              src={slide3}
              alt="Slide 3"
              className="w-full h-[200px] md:h-[400px] object-cover"
            />
          </Slider>
        </div>

        <div className="w-1/4  flex flex-wrap ">
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-[100px] md:h-[200px]  object-cover"
          />
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-[100px] md:h-[200px] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default MainSlider;
