import React, { useState } from "react";
import { validate } from "../utils/validation";
import { addUsers } from "../api/endpoints";
import { successToast } from "../utils/toast";

const AddUser = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    phone: "",
  });

  async function handleSubmite() {
    // check if inputs are not empty
    if (validate(form)) {
      setError(true);
      return;
    }
    const data = await addUsers(form);
    console.log(data);
    successToast("User added successfully");
    setForm({ firstName: "", lastName: "", username: "", phone: "" });
  }

  return (
    <div className="flex flex-col gap-4 w-[300px]">
      {error && (
        <p className="text-red-500 font-medium my-2">All fields are required</p>
      )}
      <input
        type="text"
        placeholder="firstName"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        className="defaultInput"
      />
      <input
        type="text"
        placeholder="lastName"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        className="defaultInput"
      />
      <input
        type="text"
        placeholder="username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
        className="defaultInput"
      />
      <input
        type="text"
        placeholder="phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="defaultInput"
      />

      <button className="defaultButton" onClick={handleSubmite}>
        Create
      </button>
    </div>
  );
};

export default AddUser;
