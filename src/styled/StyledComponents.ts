import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 1.5rem;
  background-color: #f3f4f6;
  min-height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const OrderInfo = styled.p`
  margin: 0.5rem 0;
`;

export const StatusBadge = styled.span<{
  status: "Pending" | "Shipped" | "Delivered";
}>`
  display: inline-block;
  padding: 0.4rem 0.75rem;
  border-radius: 0.375rem;
  font-weight: 500;
  color: white;
  background-color: ${({ status }) =>
    status === "Pending"
      ? "#f59e0b"
      : status === "Shipped"
      ? "#3b82f6"
      : "#10b981"};
`;
