import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";

function ForgetPassword() {
  const { userLogin, setuserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
  };

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        values
      );
      if (data.statusMsg === "success") {
        localStorage.setItem("userToken", data.token);
        setuserLogin(data.token);
        navigate("/resetcode");
      }
    } catch (apiResponse) {
      console.error("Error during registration:", apiResponse);
      if (apiResponse.message == "Network Error") {
        setError(
          "⚠️ Unable to connect. Please check your internet connection."
        );
      } else {
        setError(apiResponse?.response?.data?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter valid email: example@example.com"
      ),
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
        Reset Password
      </h2>
      {error && (
        <div className="w-4/5 md:w-3/5 mx-auto mt-3 bg-red-100 text-red-900 text-center rounded-md py-3">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="w-4/5 md:w-3/5 mx-auto my-10">
        <div className="grid grid-cols-2  gap-4">
          <div className="col-span-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
                label="Email"
                labelPlacement="outside"
                type="email"
              />
            </div>
            {touched.email && errors.email && (
              <p className="text-red-500">{errors.email}</p>
            )}
          </div>

          <Button
            isLoading={isLoading}
            type="submit"
            className="col-span-2 text-white  text-xl"
            color="primary"
          >
            Reset Password
          </Button>
        </div>
      </form>
    </>
  );
}

export default ForgetPassword;
