import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      console.log(data);
      const res = await fetch("http://192.168.137.39:8000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await res.json();
      if (responseData.status === false) {
        setError(responseData.message);
        console.log(error)
        setTimeout(() => {
          setError(null);
        }, 3000);
        setLoading(false)
      } else {
        setLoading(false);
        setError(null);
        navigate("/subjects");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Error Logging In");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className="bg-sky-50 h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="w-[50%] h-[70%] p-10 border gap-12 flex-col flex items-center justify-center rounded-3xl m-20 shadow relative">
        <h1 className="text-xl absolute top-20 ">COCO</h1>
        <h1 className="text-center text-5xl font-bold">Login</h1>
        <form action="" className="flex flex-col gap-4 w-[80%] " onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="px-6 py-3 rounded-lg "
            value={data.username}
            required
            onChange={(e) =>
              setData({ ...data, [e.target.id]: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="px-6 py-3 rounded-lg "
            value={data.password}
            required
            onChange={(e) =>
              setData({ ...data, [e.target.id]: e.target.value })
            }
          />
          <Button
            type="submit"
            variant="primary"
            className="hover:bg-white hover:text-neelo-700 py-3 text-xl bg-neelo-700"

            disabled={loading}
          >
            Login
          </Button>
        </form>
        {error && (
          <Alert variant="danger" className="absolute bottom-5">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
