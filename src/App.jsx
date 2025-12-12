import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Owner from "./views/Owner";
import EmployeeTable from './components/EmployeeTable';



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
      {path: "/", element: <Home />},
      {path: "owner", element: <Owner />},
    ],
  },
]);



export default function App() {

  const [employees, setEmployees] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("null");
  
      useEffect(() =>{
  
          const fetchEmployees = async() => {
              try {
                  const response = await fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members");
  
                  if(!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`)
                  }
  
                  const result = await response.json();
                  setEmployees(result);

  
              } catch (error) {
                  setError(error);
                  console.log(error);
                  
              } finally{
                  setLoading(false);
              }
          };
          fetchEmployees();
      },[]);
  
      if(loading) {
          return <div>Loading data...</div>
      }
  
      if(error) {
          <div>Error:{error.message}</div>;
      }
  return (
    <div>
    <RouterProvider router={router} />
    
    <EmployeeTable employees={employees} />
    </div>

  )
}
