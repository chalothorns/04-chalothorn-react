
import EmployeeTable from "./EmployeeTable";
import Form from "./form";

const AdminHomeView = ({employees, isAdmin, onUserCreated}) => {
  return (
    <div className="p-25 ">

      <Form onUserCreated={onUserCreated}>
        {({ formData, loading, handleChange, handleSubmit }) => (

    <form onSubmit={handleSubmit}>
      <h2 className="font-bold text-black text-2xl mb-5">Create User Here</h2>
      <div className="flex flex-row justify-between pb-12 ">


        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          disabled={loading}
          className="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base  focus:outline-indigo-500 placeholder:text-gray-400"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          disabled={loading}
          className="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base focus:outline-indigo-500 placeholder:text-gray-400"
        />
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
          disabled={loading}
          className="w-80 rounded-md border border-none bg-white px-3 py-1.5 text-base  focus:outline-indigo-500 placeholder:text-gray-400"
        />

        <button 
        type="submit"
        disabled={loading}
        className="bg-indigo-500 text-white rounded-xl  cursor-pointer px-8 py-4">
          Save
        </button>
      </div>
</form>
          )}
      </Form>

      <EmployeeTable employees={employees} isAdmin={isAdmin}/>
    </div>
  );
};

export default AdminHomeView;
