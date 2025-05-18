import axios from "axios";
import React, { useEffect, useState } from "react";

const componentName = async () => {
  interface user {
    f_name: string;
    l_name: string;
  }

  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/room/all?limit=1&page=1").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <h1>Hello, This is home Page</h1>
      {users.map((ab) => ab.f_name)}
    </>
  );
};

export default componentName;
