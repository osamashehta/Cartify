import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import toast from "react-hot-toast";

function Checkout() {
  const { userLogin, setuserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [cartItem, setCartItem] = useState();
  const { cartId } = useParams();
  const initialValues = {
    details: "",
    phone: "",
    city: "",
    paymentMethod: "",
  };

  const onSubmit = async () => {
    setIsLoading(true);

    if (values.paymentMethod === "cash") {
      try {
        const { data } = await axios.post(
          `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
          values,
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        );
        if (data.data.status === "success") {
          setCartItem(data.data.cartItems);
          toast.success(data.data.status);
        }
        navigate("/allorders");
      } catch (apiResponse) {
        console.error("Error during registration:", apiResponse);
        if (apiResponse.message == "Network Error") {
          setError(
            "⚠️ Unable to connect. Please check your internet connection."
          );
        } else {
          setError("There is no cart for your, Start shopping to fill it up! ");
        }
      } finally {
        setIsLoading(false);
      }
    } else if (values.paymentMethod === "stripe") {
      try {
        const { data } = await axios.post(
          `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
          values,
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
            params: {
              url: "https://cartify-ebon.vercel.app",
            },
          }
        );

        if (data.status === "success") {
          toast.success(data.status);
        }
        location.href = data.session.url;
      } catch (apiResponse) {
        console.error("Error during registration:", apiResponse);
        if (apiResponse.message == "Network Error") {
          setError(
            "⚠️ Unable to connect. Please check your internet connection."
          );
        } else {
          setError("There is no cart for your, Start shopping to fill it up! ");
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    city: Yup.string().required("City is required"),
    details: Yup.string().required("Details is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^(01[0-2,5])[0-9]{8}$/, "Enter Egyptian number"),
    paymentMethod: Yup.string()
      .required("Payment method is required")
      .oneOf(["stripe", "cash"], "Invalid payment method"),
  });

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  return (
    <>
      <h2 className="w-4/5 md:w-3/5 mx-auto mt-4 text-blue-700 text-center font-bold text-4xl">
        Checkout
      </h2>
      {error && (
        <div className="w-4/5 md:w-3/5 mx-auto mt-3 bg-red-100 text-red-900 text-center rounded-md py-3">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-4/5 md:w-3/5 mx-auto my-10">
        <div className="grid grid-cols-2  gap-2">
          <div className="col-span-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                name="city"
                label="City"
                labelPlacement="outside"
                type="text"
              />
            </div>
            {touched.city && errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          <div className="col-span-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.details}
                name="details"
                label="Details"
                labelPlacement="outside"
                type="text"
              />
            </div>
            {touched.details && errors.details && (
              <p className="text-red-500 text-sm mt-1">{errors.details}</p>
            )}
          </div>

          <div className="col-span-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                name="phone"
                label="Phone"
                labelPlacement="outside"
                type="tel"
              />
            </div>
            {touched.phone && errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="col-span-2">
            <div className="flex w-full flex-wrap justify-evenly items-center mt-2 md:flex-nowrap mb-6 md:mb-0 gap-4">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.paymentMethod === "stripe"}
                />
                Pay with Stripe
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.paymentMethod === "cash"}
                />
                Pay with Cash
              </label>
            </div>
            {touched.paymentMethod && errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1 text-center">
                {errors.paymentMethod}
              </p>
            )}
          </div>

          <Button
            isLoading={isLoading}
            type="submit"
            className="col-span-2 text-white my-2  text-lg"
            color="success"
          >
            Checkout
          </Button>

          <Link
            to="/cart"
            className="col-span-2 text-blue-700  text-base   text-center "
          >
            Back To Cart <i className="ml-2 fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Checkout;
