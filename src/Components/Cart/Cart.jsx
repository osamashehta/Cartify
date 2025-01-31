import axios from "axios";
import { useEffect, useState } from "react";
import CartData from "../CartData/CartData";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/cart.png";
import Loader from "./../Loader/Loader";

function Cart() {
  const navigate = useNavigate();

  const [cartId, setCartId] = useState(null);
  const [cartData, setCartData] = useState(null);
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GetLoggedUserCart();
  }, []);

  async function GetLoggedUserCart() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      console.log("Cart data to send", data.data);
      console.log("Cart ID", data);
      console.log("Cart Owner", data.data.cartOwner);
      localStorage.setItem("cartOwner", data.data.cartOwner);
      setCartId(data.cartId);
      setCartData(data.data);
      setNumOfCartItems(data.numOfCartItems);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  async function removeSpecificCartItems(itemId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${itemId}`,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      setCartData(data.data);
      setNumOfCartItems(data.numOfCartItems);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCartProductQuantity(itemId, count) {
    console.log("count", count);

    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${itemId}`,
        {
          count,
        },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      setCartData(data.data);
      setNumOfCartItems(data.numOfCartItems);
    } catch (error) {
      console.log(error);
    }
  }

  async function clearCart() {
    try {
      setIsLoading(true);

      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );
      console.log("Cart data", data.data);
      setCartId(null);
      setCartData(null);
      setNumOfCartItems(0);
      console.log("data.data", data.data.products);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <>
      <div>
        {isLoading ? (
          <Loader />
        ) : numOfCartItems ? (
          <CartData
            cartData={cartData}
            removeSpecificCartItems={removeSpecificCartItems}
            clearCart={clearCart}
            updateCartProductQuantity={updateCartProductQuantity}
          />
        ) : (
          <>
            <div className="text-center py-10">
              <img
                src={cart}
                alt="Empty Cart"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Your Cart is Empty
              </h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added anything to your cart yet. Start
                shopping to fill it up!
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
                onClick={() => {
                  navigate("/");
                }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
