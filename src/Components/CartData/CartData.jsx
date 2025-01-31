import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CartData({
  cartData,
  removeSpecificCartItems,
  clearCart,
  updateCartProductQuantity,
}) {
  const navigate = useNavigate();
  const [productCount, setProductCount] = useState({});
  const [timeoutId, setTimeoutId] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("cartData", cartData);

  useEffect(() => {
    setLoading(false);
    if (cartData) {
      const initialCounts = {};
      cartData.products.forEach((item) => {
        initialCounts[item.product._id] = item.count;
      });
      setProductCount(initialCounts);
    }
  }, [cartData]);

  const handleQuantityChange = (itemId, newCount) => {
    setLoading(true);
    console.log("loading", loading);

    setProductCount((prev) => ({
      ...prev,
      [itemId]: newCount,
    }));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      updateCartProductQuantity(itemId, newCount);
    }, 300);
    console.log("loading after", loading);
    setTimeoutId(newTimeoutId);
  };

  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Left Column - Cart Items */}
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 mt-4 mb-8" />

          <div className="space-y-4">
            {cartData?.products.map((item, index) => (
              <div key={index} className=" justify-center items-center gap-4">
                <div className=" flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                    <img
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className=" w-full">
                    <h3 className="text-base md:font-bold text-gray-800">
                      {item.product.title}
                    </h3>

                    <div className="flex flex-col lg:flex-row  justify-between items-start my-1 w-full ">
                      <div className="flex justify-start items-center gap-4 ">
                        {/* Quantity Buttons and Total Price */}
                        <div className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                          <button
                            disabled={productCount[item.product._id] === 1}
                            onClick={() =>
                              handleQuantityChange(
                                item.product._id,
                                productCount[item.product._id] - 1
                              )
                            }
                          >
                            <i
                              className={`fa-solid fa-minus text-white ${
                                productCount[item.product._id] !== 1
                                  ? "bg-red-500 hover:bg-red-600"
                                  : "bg-red-200"
                              } p-1 rounded-md`}
                            ></i>
                          </button>

                          <span className="mx-2.5">
                            {productCount[item.product._id]}
                          </span>

                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.product._id,
                                productCount[item.product._id] + 1
                              )
                            }
                          >
                            <i className="fa-solid fa-plus text-white bg-blue-500 hover:bg-blue-600 p-1 rounded-md"></i>
                          </button>
                        </div>

                        {/* Price */}
                        <div className="ml-auto">
                          <h4 className="text-base md:font-bold text-gray-800">
                            EGP{item.price.toFixed(2)}
                          </h4>
                        </div>
                      </div>

                      <div className="flex justify-start items-center my-1 space-x-4">
                        <h6
                          onClick={() =>
                            removeSpecificCartItems(item.product._id)
                          }
                          className="text-xs text-red-500 hover:text-red-700 cursor-pointer mt-0.5 flex justify-center items-center"
                        >
                          Remove <i className="ms-2 fa-solid fa-trash"></i>
                        </h6>

                        {/* Total Price */}
                        <div>
                          <h4 className="text-base md:font-bold text-blue-600 hover:text-blue-800">
                            EGP{(item.price * item.count).toFixed(2)}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => clearCart()}
            className="my-3 text-red-500 hover:text-red-700 text-xl font-semibold  ms-1"
          >
            Clear <i className="fa-solid fa-trash"></i>
          </button>
        </div>

        {/* Right Column - Summary */}
        <div className="bg-gray-100 h-fit sticky top-[10%]  rounded-md p-4 ">
          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Total{" "}
              <span className="ml-auto">
                {loading ? (
                  <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                ) : (
                  cartData?.totalCartPrice?.toFixed(2)
                )}
              </span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <Link
              to={`/checkout/${cartData._id}`}
              type="button"
              className="text-sm px-4 py-2.5 block text-center w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Checkout
            </Link>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md hover:bg-blue-600 hover:text-white
                transition-all duration-300 "
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartData;
