import React, { useState } from "react";


const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

//   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white max-w-md w-full rounded-lg overflow-hidden shadow-lg">
        {/* Header image */}
        <div className="relative h-60">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Header"
            className="w-full h-full object-cover"
          />
          <button
            // onClick={onClose}
            className="absolute top-4 right-4 text-black text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6">SIGN IN</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log({ name, password });
            }}
          >
            {/* Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 pr-12 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Forgot password */}
            <div className="mb-6 text-sm">
              <a href="#" className="text-black underline">
                Lost your password?
              </a>
            </div>

            {/* Sign in */}
            <button
              type="submit"
              className="w-full py-3 bg-black text-white rounded-full font-semibold"
            >
              SIGN IN
            </button>

            {/* Create account */}
            <button
              type="button"
              className="w-full mt-4 py-3 bg-gray-500 text-white rounded-full font-semibold"
            >
              CREATE AN ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn
