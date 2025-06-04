import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-5 m-auto items-start p-8 min-w-[340px] sm:min-w-9 border rounded-xl text-zinc-600 text-sm shadow-lg bg-white">
        <h2 className="text-xl font-bold text-center">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </h2>
        <p className="text-center text-gray-500">
          Please {state === "Sign Up" ? "sign up" : "login"} to book an
          Appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <label className="block mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <div className="w-full">
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <p className="mt-4 text-center text-gray-500">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
            className="text-blue-600 hover:underline"
          >
            {state === "Sign Up" ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </form>
  );
};

export default Login;
