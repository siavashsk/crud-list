import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import EditModal from "./editModal";
import { deleteUser, fetchUsers } from "../api/endpoints";
import { successToast } from "../utils/toast";

const UserList = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  async function handleDelete(id) {
    const data = await deleteUser(id);
    console.log(data);
    successToast("User deleted");
    // make dependency change
    setState((prev) => prev + 1);
  }

  const onClose = () => setIsOpen(false);

  const getUsers = async () => {
    const data = await fetchUsers();
    if (data) setData(data);
  };

  useEffect(() => {
    getUsers();
  }, [state]);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setIsOpen(true);
  };

  const selectedUser = data?.find((item) => item.id === selectedUserId);

  return (
    <div className="m-10">
      <h1 className="text-3xl text-gray-600 font-bold mb-6">User List</h1>
      <div className="w-[600px] flex justify-between font-bold text-gray-400">
        <p>First Name</p>
        <p>Last Name</p>
        <p>username</p>
        <p>phone</p>
      </div>
      {data?.map((item) => (
        <div key={item.id} className="userItem">
          <p>{item?.firstName}</p>
          <p>{item?.lastName}</p>
          <p>{item?.username}</p>
          <p>{item?.phone}</p>
          <div className="flex gap-6">
            <button
              className="text-sky-500"
              onClick={() => handleUserClick(item.id)}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <EditModal
        isOpen={isOpen}
        onClose={onClose}
        userData={selectedUser}
        setState={setState}
      />
      <ToastContainer />
    </div>
  );
};

export default UserList;
