"use client";
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle login/signup logic here
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        {isSignup && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mb-4"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <button
        onClick={() => setIsSignup(!isSignup)}
        className="mt-4 text-blue-500"
      >
        {isSignup ? 'Already have an account? Login' : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default LoginPage;