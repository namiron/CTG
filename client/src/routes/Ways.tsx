import AddEmployee from "../pages/employees/AddEmployee";
import EditEmployee from "../pages/employees/EditEmployee";
import Employee from "../pages/employees/Employee";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Status from "../pages/status/Status";
import { ROUTES } from "./Routes.routes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.login,
    element: <Login />,
  },
  {
    path: ROUTES.register,
    element: <Register />,
  },
  {
    path: ROUTES.employeeAdd,
    element: <AddEmployee />,
  },
  {
    path: `${ROUTES.status}/:status`,
    element: <Status />,
  },
  {
    path: `${ROUTES.employee}/:id`,
    element: <Employee />,
  },
  {
    path: `${ROUTES.employeeEdit}/:id`,
    element: <EditEmployee />,
  },
]);

export default router;
