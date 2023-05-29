import { Input } from "antd";
import axios from "axios";
import React from "react";
import { useState } from "react";

const LoginOTP = () => {
  const [num, setNum] = useState("");

  const submit = (e) => {
    e.preventDefault();

    axios.post("/api/otp/verify", { num: num });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          value={num}
          className="form-control"
          onChange={(e) => setNum(e.target.value)}
        />
      </form>
    </div>
  );
};

export default LoginOTP;
