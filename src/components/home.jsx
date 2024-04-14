import React from "react";
import AddUser from "./addUser";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="m-10">
      <div className="flex justify-between">
        <h1 className="text-3xl text-gray-600 font-bold">Task</h1>
        <button className="defaultButton" onClick={() => navigate("/users")}>
          Users list
        </button>
      </div>
      <div className="mt-10">
        <AddUser />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
