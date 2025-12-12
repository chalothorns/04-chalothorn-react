import { useState } from "react";
import ViewToggleButton from "../components/ViewToggleButton";
import UserHomeView from "../components/UserHomeView";
import AdminHomeView from "../components/AdminHomeView";

export default function Home(){

    const [view, setView] = useState("");

//     function FetchAPI() {const [employees, setEmployees] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("null");

//     useEffect(() =>{

//         const fetchEmployees = async() => {
//             try {
//                 const response = await fetch("https://67eca027aa794fb3222e43e2.mockapi.io/members");

//                 if(!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`)
//                 }

//                 const result = await response.json()
//                 setEmployees(result)
//                 console.log(employees)

//             } catch (error) {
//                 setError(error);
//                 console.log(error);
                
//             } finally{
//                 setLoading(false);
//             }
//         };
//         fetchEmployees();
//     },[]);

//     if(loading) {
//         return <div>Loading data...</div>
//     }

//     if(error) {
//         <div>Error:{error.message}</div>;
//     }
// } 


    return(
        <div className="flex flex-col justify-center items-center w-[70%] mx-auto">
        <div>
            <p className="text-5xl font-bold mt-10">Generation Thailand</p>
            <p className="text-5xl font-bold mt-4">React - Assessment</p>
        </div>

        <div className="mt-10 font-bold text-3xl">
            <ViewToggleButton
            onClick={() =>{
                setView("user");
            }}
            
            >
                {/* User Home View ถูกส่งไปที่ ViewToggleButton ในฐานะ prop.children */}
            User Home View
            </ViewToggleButton>

            <ViewToggleButton
            onClick={() =>{
                setView("admin");
            }}
            
            >
            Admin Home View 
            </ViewToggleButton>
            
        </div>
        {view === "user" && <UserHomeView />}
      {view === "admin" && <AdminHomeView />}
        </div>
    )
    
}