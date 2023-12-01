import { api } from "./axios";

export interface Order {
  Id: number;
  SerialId: string;
  BranchStoreId: number;
  BranchStoreName: string;
  CustomerId: number;
  CustomerFullName: string;
  ManagerId: number;
  ManagerFullName: string;
  ReservationTime: string;
  Status: number;
  StatusName: string;
}

interface OrdersResponse {
  Data: Order[];
}

export const fetchOrders = async (token: string) => {
  const response = await api.get<OrdersResponse>("http://localhost:5285/api/Order", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const {
    data: { Data: orders },
    status,
  } = response;
  return { orders, status };
};
