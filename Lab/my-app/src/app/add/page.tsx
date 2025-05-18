"use client";
import axios from "axios";
import React from "react";

const Add = () => {
  const [f_name, setf_name] = React.useState("");
  const [l_name, setl_name] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault(true);
    const data = { f_name, l_name };
    try {
      axios.post("http://localhost:3000/room/add", data);
      alert("Data Inserted");
      setf_name("");
      setl_name("");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          value={f_name}
          placeholder="Enter first Name"
          onChange={(e) => setf_name(e.target.value)}
        />
        <input
          type="text"
          name=""
          value={l_name}
          placeholder="Enter last Name"
          onChange={(e) => setl_name(e.target.value)}
        />
        <button type="submit">Insert</button>
      </form>
    </>
  );
};
export default Add;
