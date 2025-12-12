import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./views/Home";
import Owner from "./views/Owner";
import axios from "axios";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("null");
  const [isAdmin, setIsAdmin] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleUserCreated = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          "https://67eca027aa794fb3222e43e2.mockapi.io/members"
        );

        setEmployees(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, [refreshKey]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-4xl">404 - Page Not Found 😓</h1>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home employees={employees} isAdmin={isAdmin} onUserCreated={handleUserCreated} />,
        },
        { path: "owner", element: <Owner /> },
      ],
    },
  ]);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    <div>Error:{error.message}</div>;
  }
  return <RouterProvider router={router} />;

}
