import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../Context/UserContext";

function AddToWishList({ productId }) {
  const { userLogin } = useContext(UserContext);
  async function handleAdding(productId) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error("The product could not be added to your WishList");
    }
  }

  const handleAddingToWishList = () => {
    if (userLogin) {
      handleAdding(productId);
    } else {
      toast.error("Please login to add to cart");
    }
  };

  return (
    <div
      className="bg-blue-400  rounded-md py-1 px-2 mt-1 w-fit group/heart absolute top-[0%] right-[2%] cursor-pointer"
      onClick={() => handleAddingToWishList()}
    >
      <i className="fa-solid fa-heart text-blue-100  group-hover/heart:scale-125 transition-all duration-500"></i>
    </div>
  );
}

export default AddToWishList;
