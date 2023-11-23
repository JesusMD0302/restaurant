import { api } from "./axios";

export interface Order {
  key: string | number;
  customer: {
    avatar: string;
    name: string;
  };
  menu: string;
  total: string | number;
  status: string;
}

export const fetchOrders = async () => {
  const response = await api.get<Order[]>("/orders.json");
  const { data, status } = response;
  return { data, status };
};
