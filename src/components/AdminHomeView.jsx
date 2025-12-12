import React from "react";

const AdminHomeView = () => {
  return (
    <div className="p-25 ">
        <h2 class="font-bold text-black text-2xl mb-5">Create User Here</h2>

      <div class="flex flex-row justify-between pb-12 ">
    
              <input
                id="first-name"
                type="text"
                name="first-name"
                placeholder="Name"
                class="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base  focus:outline-indigo-500 placeholder:text-gray-400"
              />
              <input
                id="last-name"
                type="text"
                name="last-name"
                placeholder="Last Name"
                class="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base focus:outline-indigo-500 placeholder:text-gray-400"
              />
              <input
                id="position"
                type="text"
                name="position"
                placeholder="Position"
                class="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base  focus:outline-indigo-500 placeholder:text-gray-400"
              />

              <button className="bg-indigo-500 text-white rounded-xl  cursor-pointer px-8 py-4">Save</button>
            
          
        
      </div>

      <table class="border-collapse border border-gray-400 ">
        <thead className="bg-gray-100">
          <tr>
            <th class=" border border-gray-300 px-30 py-4 ">Name</th>
            <th class="border border-gray-300 px-30 py-4">Last Name</th>
            <th class="border border-gray-300 px-30 py-4">Position</th>
            <th class="border border-gray-300 px-30 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td class="border border-gray-300 px-0 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 text-red-600 font-bold">
              Delete
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 text-red-600 font-bold">
              Delete
            </td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 "></td>
            <td class="border border-gray-300 px-30 py-4 text-red-600 font-bold">
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminHomeView;
