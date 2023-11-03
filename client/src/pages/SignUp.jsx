import React from "react";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 focus:outline-none">
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-3 focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border rounded-lg p-3 focus:outline-none"
          id="username"
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3 focus:outline-none"
          id="username"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-88 disabled:opacity-80">
          Sign UP
        </button>
      </form>
    </div>
  );
}
