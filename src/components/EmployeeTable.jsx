import React from "react";
import Form from "./form";

const EmployeeTable = ({employees, isAdmin, onDelete}) => {



      return (
        <>
        <table className="border-collapse border border-gray-400">
        <thead className="bg-gray-100">
          <tr>
            <th className=" border border-gray-300 px-30 py-4 ">Name</th>
            <th className="border border-gray-300 px-30 py-4">Last Name</th>
            <th className="border border-gray-300 px-30 py-4">Position</th>
            {isAdmin &&(
            <th className="border border-gray-300 px-30 py-4">Action</th>)}
          </tr>
        </thead>
        <tbody className="bg-white">
          {employees.map((item) => (
            
          <tr key={item.id}>
            <td className="border border-gray-300 px-0 py-4 ">{item.name}</td>
            <td className="border border-gray-300 px-30 py-4 ">{item.lastname}</td>
            <td className="border border-gray-300 px-30 py-4 ">{item.position}</td>
            {(isAdmin &&
            <td className="border border-gray-300 px-30 py-4 font-semibold">
                <button
                onClick={() => onDelete(item.id)}
                className=" text-white rounded-xl bg-red-400 cursor-pointer px-4 py-2 ">Delete</button>
              
            </td>)}
          </tr>
          
          ))}
        </tbody>
      </table>
      </>
      )
    };
      export default EmployeeTable;