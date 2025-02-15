import { useEffect, useState } from "react";
import AllProducts from "../../Components/AllProducts/AllProducts";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import MainSlider from "../../Components/MainSlider/MainSlider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Filter from "../../Components/Filter/Filter";

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

  function handleFilter(target) {
    if (target == "All") {
      setOptions(data);
    } else if (
      target == "Men's Fashion" ||
      target == "Women's Fashion" ||
      target == "Electronics"
    ) {
      setOptions(
        data?.filter(
          (Product) =>
            Product.category.name.toLowerCase() == target.toLowerCase()
        )
      );
    } else if (
      target == "Electronics" ||
      target == "Defacto" ||
      target == "Adidas" ||
      target == "LC Waikiki" ||
      target == "Samsung" ||
      target == "Sony" ||
      target == "Dell"
    ) {
      setOptions(
        data?.filter(
          (Product) => Product.brand.name.toLowerCase() == target.toLowerCase()
        )
      );
    }
  }

  return (
    <>
      <MainSlider />
      <CategorySlider />
      <Filter handleFilter={handleFilter} />
      <AllProducts data={options} isLoading={isLoading} />
    </>
  );
}

export default Home;
