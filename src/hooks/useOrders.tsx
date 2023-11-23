import { Order, fetchOrders } from "@/libs/requests";
import { useState, useEffect } from "react";

const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [status, setStatus] = useState<number>(0);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setLoading(true);

    fetchOrders()
      .then((response) => {
        const { data, status } = response;
        setOrders(data);
        setStatus(status);
      })
      .catch((err) => {
        setErrors(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, orders, status, errors };
};

export default useOrders;
