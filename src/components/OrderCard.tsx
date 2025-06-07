import React from "react";
import { Card, OrderInfo, StatusBadge } from "../styled/StyledComponents";

interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  status: "Pending" | "Shipped" | "Delivered";
}

interface Props {
  order: Order;
}

const OrderCard: React.FC<Props> = ({ order }) => {
  return (
    <Card>
      <OrderInfo>
        <strong>Customer:</strong> {order.customerName}
      </OrderInfo>
      <OrderInfo>
        <strong>Date:</strong> {order.orderDate}
      </OrderInfo>
      <StatusBadge status={order.status}>{order.status}</StatusBadge>
    </Card>
  );
};

export default OrderCard;
