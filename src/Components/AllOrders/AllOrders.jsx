import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
function AllOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const cartOwner = localStorage.getItem("cartOwner")
    ? localStorage.getItem("cartOwner")
    : [];

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/orders/user/${cartOwner}`
        );
        setOrders(data.reverse());
      } catch (error) {
        setError("Failed to load orders. Please try again later.");
        console.log(error, "error");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="container mx-auto p-4 my-12">
      <h1 className="text-xl font-bold mb-4">Your Order</h1>
      {orders?.length === 0 ? (
        <Loader />
      ) : (
        orders?.map((orders, index) => (
          <div key={index}>
            <Table className="min-w-full bg-white border border-gray-200">
              <Thead>
                <Tr className="text-xs md:text-base">
                  <Th className="py-2 px-4 border-b">Order ID</Th>
                  <Th className="py-2 px-4 border-b">Name</Th>
                  <Th className="py-2 px-4 border-b">Total Amount</Th>
                  <Th className="py-2 px-4 border-b">Date</Th>
                  <Th className="py-2 px-4 border-b">Payment Method</Th>
                  <Th className="py-2 px-4 border-b">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr className="text-center text-xs md:text-base">
                  <Td className="py-2 px-4 border-b">{orders.id}</Td>
                  <Td className="py-2 px-4 border-b">{orders.user.name}</Td>
                  <Td className="py-2 px-4 border-b">
                    EGP{orders.totalOrderPrice}
                  </Td>
                  <Td className="py-2 px-4 border-b">
                    {new Date(orders.updatedAt).toLocaleDateString()}
                  </Td>
                  <Td className="py-2 px-4 border-b">
                    {orders.paymentMethodType}
                  </Td>
                  <Td className="py-2 px-4 border-b">
                    {orders.isDelivered ? "Delivered" : "Processing"}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        ))
      )}
    </div>
  );
}

export default AllOrders;
