import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DashboardContent from "./pages/dashboard";
import Home from "./pages/Home";
import Login from "./pages/users/login";
import Register from "./pages/users/register";
import AddExpense from "./pages/expense/addExpense";
import AddIncome from "./pages/income/addIncome";
import ProtectedRoute from "./components/Navigation/protectedRoute";
import ExpenseStats from "./pages/expense/expenseDeposit";
// import ExpenseTable from "./pages/expense/expenseTable";
// import ExpenseChart from "./pages/expense/expenseCharts";
import EditExpense from "./pages/expense/editExpense";
import EditIncome from "./pages/income/editIncome";
import ExpenseDash from "./pages/expense/expenseDash";
import IncomeDash from "./pages/income/incomeDash";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="https://finance-crawler.netlify.app/expenseDashboard"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="https://finance-crawler.netlify.app/expenseDashboard"
            element={<ExpenseDash />}
          />
          <Route
            exact
            path="https://finance-crawler.netlify.app/expenseDashboard/editExpense"
            element={<EditExpense />}
          />
        </Route>

        <Route
          exact
          path="https://finance-crawler.netlify.app/addExpense"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="https://finance-crawler.netlify.app/addExpense"
            element={<AddExpense />}
          />
        </Route>

        <Route
          exact
          path="https://finance-crawler.netlify.app/incomeDashboard"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="https://finance-crawler.netlify.app/incomeDashboard"
            element={<IncomeDash />}
          />
          <Route
            exact
            path="https://finance-crawler.netlify.app/incomeDashboard/editIncome"
            element={<EditIncome />}
          />
        </Route>

        <Route
          exact
          path="https://finance-crawler.netlify.app/addIncome"
          element={<ProtectedRoute />}
        >
          <Route
            exact
            path="https://finance-crawler.netlify.app/addIncome"
            element={<AddIncome />}
          />
        </Route>

        <Route
          exact
          path="https://finance-crawler.netlify.app/login"
          element={<Login />}
        />
        <Route
          exact
          path="https://finance-crawler.netlify.app/register"
          element={<Register />}
        />

        <Route
          exact
          path="https://finance-crawler.netlify.app/"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}
