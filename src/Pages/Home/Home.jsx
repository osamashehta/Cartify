import { useEffect, useState } from "react";
import AllProducts from "../../Components/AllProducts/AllProducts";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import MainSlider from "../../Components/MainSlider/MainSlider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoriesOptions from "../../Components/CategoriesOptions/CategoriesOptions";

function Home() {
  function getAllProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let { data, isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
    select: (data) => data.data.data,
  });

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);
  console.log("tanstack category ", options);

  function handleCategory(categoryName) {
    console.log("hihihi");
    if (categoryName == "All") {
      setOptions(data);
    } else {
      setOptions(
        data?.filter(
          (Product) =>
            Product.category.name.toLowerCase() == categoryName.toLowerCase()
        )
      );
    }
  }

  function handleBrand(brandName) {
    console.log("hihihi");
    if (brandName == "All") {
      setOptions(data);
    } else {
      setOptions(data?.filter((Product) => Product.brand.name == brandName));
    }
  }

  return (
    <>
      <MainSlider />
      <CategorySlider />
      <CategoriesOptions
        handleCategory={handleCategory}
        handleBrand={handleBrand}
      />
      <AllProducts data={options} isLoading={isLoading} />
    </>
  );
}

export default Home;
