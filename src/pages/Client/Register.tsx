import React from 'react'

const Register = () => {
  return (
    <div>
        
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-md relative">

        {/* Hình ảnh đầu form */}
        <div
          className="h-40 bg-cover bg-center"
          style={{ backgroundImage: `url('/sofa.jpg')` }} // bạn thay bằng ảnh sofa bạn có
        >
          <button
            // onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Nội dung form */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center">REGISTER</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
          />

          <div className="relative">
            <input
            //   type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
            //   onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {/* {showPassword ? '🙈' : '👁️'} */}
            </button>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full font-semibold">
            REGISTER
          </button>

          <button className="w-full bg-gray-600 text-white py-3 rounded-full font-medium">
            ALREADY HAS AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  

    </div>
  )
}

export default Register