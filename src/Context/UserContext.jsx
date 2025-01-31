import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
  const [userLogin, setuserLogin] = useState(localStorage.getItem("userToken"));

  useEffect(() => {
    verifyToken();

    const handleStorageChange = (event) => {
      if (event.key === "userToken") {
        verifyToken();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function verifyToken() {
    axios
      .get(`https://ecommerce.routemisr.com/api/v1/auth/verifyToken`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        setuserLogin(true);
      })
      .catch((res) => {
        localStorage.removeItem("userToken");
        setuserLogin(false);
      });
  }

  return (
    <UserContext.Provider value={{ userLogin, setuserLogin }}>
      {props.children}
    </UserContext.Provider>
  );
}
