import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      {/* Login Form */}
      <main className="mx-auto w-full max-w-md">
        <h2 className="text-center text-[28px] font-bold text-[#0d141c] leading-tight mb-6">
          Log in to your account
        </h2>

        <div className="mb-4">
          <label className="block text-base font-medium text-[#0d141c] mb-2">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="form-input w-full h-14 px-4 rounded-lg border border-[#cedae8] bg-slate-50 text-[#0d141c] placeholder:text-[#49709c]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-base font-medium text-[#0d141c] mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-input w-full h-14 px-4 rounded-lg border border-[#cedae8] bg-slate-50 text-[#0d141c] placeholder:text-[#49709c]"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full h-10 bg-[#0c77f2] text-white text-sm font-bold rounded-lg"
          >
            Log In
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-[#49709c] underline">
          Don’t have an account? <Link to="/user/signup">Sign up</Link>
        </p>
      </main>
    </div>
  );
};

export default Login;
