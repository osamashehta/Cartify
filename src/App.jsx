import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Components/Cart/Cart";
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProtectedAuthRoute from "./Components/ProtectedRoute/ProtectedAuthRoute";
import Notfound from "./Components/Notfound/Notfound";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Checkout from "./Pages/Checkout/Checkout";
import AllOrders from "./Components/AllOrders/AllOrders";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import VerifyResetCode from "./Pages/VerifyResetCode/VerifyResetCode";
import Wishlist from "./Pages/Wishlist/Wishlist";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: (
          <ProtectedAuthRoute>
            <Login />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "forgetpassword",
        element: (
          <ProtectedAuthRoute>
            <ForgetPassword />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "resetpassword",
        element: (
          <ProtectedAuthRoute>
            <ResetPassword />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "resetcode",
        element: (
          <ProtectedAuthRoute>
            <VerifyResetCode />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedAuthRoute>
            <Register />
          </ProtectedAuthRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },

      {
        path: "productdetails/:category/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },

      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout/:cartId",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },

      {
        path: "*",
        element: (
          <ProtectedRoute>
            <Notfound />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
      />

      <UserContextProvider>
        <QueryClientProvider client={queryClient}>

          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
