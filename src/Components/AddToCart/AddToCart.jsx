import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function AddToCart({ hidden, productId }) {
  const [isLoading, setIsLoading] = useState(false);
  async function AddProductToCart(productId) {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      setIsLoading(false);
      toast.success(data.message);
    } catch (error) {
      toast.error("The product could not be added to your cart");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      disabled={isLoading}
      onClick={() => AddProductToCart(productId)}
      className={`${hidden}  text-white bg-blue-500 rounded-md w-full p-2 `}
    >
      {isLoading ? (
        <i className="fa-solid fa-spinner fa-spin-pulse"></i>
      ) : (
        <>
          {"Add To Cart "} <i className="fa-solid fa-cart-shopping"></i>
        </>
      )}
    </button>
  );
}

export default AddToCart;
