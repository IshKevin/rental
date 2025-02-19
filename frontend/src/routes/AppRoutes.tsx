import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PropertyList from "../pages/PropertyList";
import PropertyDetails from "../pages/PropertyDetails";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/properties", element: <PropertyList /> },
  { path: "/properties/:id", element: <PropertyDetails /> },
  { path: "/booking/:id", element: <Booking /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "*", element: <NotFound /> }, 
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
