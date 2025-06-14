import React, { useState } from "react";

import { useTheme } from "products_shell_mfe/ThemeContext";
import OrderCard from "../components/OrderCard";
import { PageContainer, Heading, Grid } from "../styled/StyledComponents";

interface Order {
  id: number;
  customerName: string;
  orderDate: string;
  status: "Pending" | "Shipped" | "Delivered";
}

const mockOrders: Order[] = [
  {
    id: 101,
    customerName: "Alice",
    orderDate: "2024-06-01",
    status: "Pending",
  },
  { id: 102, customerName: "Bob", orderDate: "2024-06-03", status: "Shipped" },
  {
    id: 103,
    customerName: "Charlie",
    orderDate: "2024-06-05",
    status: "Delivered",
  },
];

const OrderListPage: React.FC = () => {
  const { theme } = useTheme();
  const [orders] = useState<Order[]>(mockOrders);

  return (
    <PageContainer>
      This is a order list in {theme} mode.
      <Heading>Order List</Heading>
      <Grid>
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </Grid>
    </PageContainer>
  );
};

export default OrderListPage;
