import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
      <div className="mx-auto w-full max-w-md">
        <h2 className="text-[#0d141c] text-center text-[28px] font-bold leading-tight px-4 pb-3 pt-5">
          Create your account
        </h2>

        {/* Full Name */}
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col flex-1">
            <p className="text-[#0d141c] text-base font-medium pb-2">Full Name</p>
            <input
              type="text"
              placeholder="Enter your full name"
              className="form-input w-full h-14 p-[15px] rounded-lg border border-[#cedae8] bg-slate-50 placeholder:text-[#49709c] text-[#0d141c] text-base"
            />
          </label>
        </div>

        {/* Email */}
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col flex-1">
            <p className="text-[#0d141c] text-base font-medium pb-2">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-input w-full h-14 p-[15px] rounded-lg border border-[#cedae8] bg-slate-50 placeholder:text-[#49709c] text-[#0d141c] text-base"
            />
          </label>
        </div>

        {/* Password */}
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col flex-1">
            <p className="text-[#0d141c] text-base font-medium pb-2">Password</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-input w-full h-14 p-[15px] rounded-lg border border-[#cedae8] bg-slate-50 placeholder:text-[#49709c] text-[#0d141c] text-base"
            />
          </label>
        </div>

        {/* Button */}
        <div className="flex px-4 py-3">
          <button
            type="submit"
            className="flex flex-1 h-10 items-center justify-center rounded-lg bg-[#0c77f2] px-4 text-sm font-bold text-slate-50"
          >
            Create Account
          </button>
        </div>

        {/* Redirect link */}
        <p className="text-[#49709c] text-sm text-center underline px-4 pt-1 pb-3">
          Already have an account? <Link to="/user/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
