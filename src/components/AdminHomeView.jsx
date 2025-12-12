import EmployeeTable from "./EmployeeTable";

const AdminHomeView = () => {
  return (
    <div className="p-25 ">
      <h2 className="font-bold text-black text-2xl mb-5">Create User Here</h2>

      <div className="flex flex-row justify-between pb-12 ">
        <input
          id="first-name"
          type="text"
          name="first-name"
          placeholder="Name"
          className="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base  focus:outline-indigo-500 placeholder:text-gray-400"
        />
        <input
          id="last-name"
          type="text"
          name="last-name"
          placeholder="Last Name"
          className="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base focus:outline-indigo-500 placeholder:text-gray-400"
        />
        <input
          id="position"
          type="text"
          name="position"
          placeholder="Position"
          className="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base  focus:outline-indigo-500 placeholder:text-gray-400"
        />

        <button className="bg-indigo-500 text-white rounded-xl  cursor-pointer px-8 py-4">
          Save
        </button>
      </div>
      <EmployeeTable />
    </div>
  );
};

export default AdminHomeView;
