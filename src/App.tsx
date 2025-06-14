import "./App.css";
import OrderListPage from "./pages/OrderListPage";
import { ThemeProvider } from "products_shell_mfe/ThemeContext";

const App = () => {
  return (
    <div>
      <h1>Orders Remote App</h1>
      <p>This is the Orders Remote Micro Frontend.</p>
      <ThemeProvider>
        <OrderListPage />
      </ThemeProvider>
    </div>
  );
};

export default App;
