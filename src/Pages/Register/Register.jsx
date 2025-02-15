import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const { userLogin, setuserLogin } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isExist, setIsExist] = useState("");
  const initialValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const onSubmit = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      if (data.message === "success") {
        localStorage.setItem("userToken", data.token);
        setuserLogin(data.token);
        toast.success(data.message);
        navigate("/");
      }
    } catch (apiResponse) {
      setIsExist(apiResponse?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(10, "Must be 10 characters or more")
      .max(30, "Must be 30 characters or less"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Enter valid email: example@example.com"
      ),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Minimum eight characters, at least one letter and one number"
      ),
    rePassword: Yup.string()
      .required("Re-Password is required")
      .oneOf([Yup.ref("password")], "Re-Password doesn't match the Password"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^(01[0-2,5])[0-9]{8}$/, "Enter Egyptian number"),
  });

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });

  const EyeSlashFilledIcon = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
          fill="currentColor"
        />
        <path
          d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
          fill="currentColor"
        />
        <path
          d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
          fill="currentColor"
        />
        <path
          d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
          fill="currentColor"
        />
        <path
          d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const EyeFilledIcon = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
          fill="currentColor"
        />
        <path
          d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
          fill="currentColor"
        />
      </svg>
    );
  };

  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);
  const toggleVisibilityPassword = () =>
    setIsVisiblePassword(!isVisiblePassword);

  const [isVisibleRePassword, setIsVisibleRePassword] = React.useState(false);
  const toggleVisibilityRePassword = () =>
    setIsVisibleRePassword(!isVisibleRePassword);

  return (
    <>
      {isExist && (
        <div className="w-4/5 md:w-1/3 mx-auto mt-3 bg-red-200 text-red-800 text-center rounded-md py-3">
          Account Already Exists
        </div>
      )}
      <h2 className="w-4/5 md:w-1/3 mx-auto mt-4 text-blue-700 text-center font-semibold text-3xl">
        Register Now
      </h2>
      <form onSubmit={handleSubmit} className="w-4/5 md:w-1/3 mx-auto my-5">
        <div className="grid grid-cols-2  gap-4">
          <div className="col-span-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                label="Username"
                labelPlacement="outside"
                type="text"
              />
            </div>
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

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
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="col-span-1">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibilityPassword}
                  >
                    {isVisiblePassword ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                label="Password"
                labelPlacement="outside"
                type={isVisiblePassword ? "text" : "password"}
              />
            </div>
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="col-span-1">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
              <Input
                endContent={
                  <button
                    aria-label="toggle password visibility"
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibilityRePassword}
                  >
                    {isVisibleRePassword ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.rePassword}
                name="rePassword"
                label="Re-Password"
                labelPlacement="outside"
                type={isVisibleRePassword ? "text" : "password"}
              />
            </div>
            {touched.rePassword && errors.rePassword && (
              <p className="text-red-500 text-sm mt-1">{errors.rePassword}</p>
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
          <Button
            isLoading={isLoading}
            type="submit"
            className="col-span-2 text-white  text-xl"
            color="primary"
          >
            Register
          </Button>
          <Link
            to="/login"
            className="col-span-2 text-blue-700  text-base text-center"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </>
  );
}

export default Register;
