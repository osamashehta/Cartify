import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@heroui/react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import EmptyWishlist from "../../Components/EmptyWishlist/EmptyWishlist";

// Icons

function Wish() {
  const DeleteIcon = (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M8.60834 13.75H11.3833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M7.91669 10.4167H12.0834"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );

  // Table Columns
  const columns = [
    { name: "Image Cover", uid: "imageCover" },
    { name: "Name", uid: "title" },
    { name: "Price", uid: "price" },
    { name: "ACTIONS", uid: "actions" },
  ];

  let [wishlist, setWishlist] = useState([]);
  // let [loading, setLoading] = useState([]);
  const queryClient = useQueryClient(); // Get the query client
  const getWishlist = async () => {
    // setLoading(true);
    const response = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    );
    setWishlist(response.data.data);
    // setLoading(false);
    return response.data.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });

  async function AddProductToCart(productId) {
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      toast.success(data.message);
      await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      queryClient.invalidateQueries(["wishlist"]);
    } catch (error) {
      toast.error("The product could not be added to your cart");
    }
  }

  async function RemoveProduct(productId) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          headers: {
            token: localStorage.getItem("userToken"),
          },
        }
      );

      toast.success(data.message);

      queryClient.invalidateQueries(["wishlist"]);
    } catch (error) {
      toast.error("Product removed successfully to your wishlist");
    }
  }

  // Render table cells
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = item[columnKey];

    switch (columnKey) {
      case "imageCover":
        return (
          <img
            src={cellValue}
            alt={item.title}
            className="w-[100px] h-[100px] object-cover"
          />
        );
      case "title":
        return <p className="text-bold text-sm capitalize">{cellValue}</p>;
      case "price":
        return <p className="text-bold text-sm">{cellValue} EGP</p>;
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Link to={`/productdetails/${item?.category.name}/${item?.id}`}>
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <i className="fa-regular fa-eye"></i>
                </span>
              </Tooltip>
            </Link>
            <Tooltip content="Add to cart">
              <button onClick={() => AddProductToCart(item.id)}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
              </button>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <button onClick={() => RemoveProduct(item.id)}>
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </button>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  // if (isLoading )
  //   return (
  //     <div className="flex justify-center items-center my-12 h-[calc(100vh-12rem)]">
  //       <span className="loader"></span>
  //     </div>
  //   );

  return isLoading ? (
    <div className="flex justify-center items-center my-12 h-[calc(100vh-12rem)]">
      <span className="loader"></span>
    </div>
  ) : data && data.length > 0 ? (
    <Table aria-label="Wishlist Table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data || []}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  ) : (
    <EmptyWishlist />
  );
}

export default Wish;
