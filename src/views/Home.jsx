import { useState } from "react";
import ViewToggleButton from "../components/ViewToggleButton";
import UserHomeView from "../components/UserHomeView";
import AdminHomeView from "../components/AdminHomeView";

export const Home = ({ employees, isAdmin, onUserCreated }) => {
  const [view, setView] = useState(isAdmin ? "admin" : "user");

  const CurrentView = view === "admin" ? AdminHomeView : UserHomeView;

  const currentIsAdmin = view === "admin" ? true : false;

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[70%] mx-auto">
        <div>
          <p className="text-5xl font-bold mt-10">Generation Thailand</p>
          <p className="text-5xl font-bold mt-4">React - Assessment</p>
        </div>

        <div className="mt-10 font-bold text-3xl">
          <ViewToggleButton
            onClick={() => {
              setView("user");
            }}
          >
            {/* User Home View ถูกส่งไปที่ ViewToggleButton ในฐานะ prop.children */}
            User Home View
          </ViewToggleButton>

          <ViewToggleButton
            onClick={() => {
              setView("admin");
            }}
          >
            Admin Home View
          </ViewToggleButton>
        </div>


            
        <div className="p-4">
          <CurrentView employees={employees} isAdmin={currentIsAdmin} onUserCreated={onUserCreated} />
        </div>
      </div>
    </div>
  );
};
