import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { useNavigate,Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Check if the response is successful
      if (response.ok) {
        // Store the token or user data in localStorage
        localStorage.setItem('user', JSON.stringify(data));

        // Redirect to homepage on successful login
        navigate('/');
      } else {
        // Handle error (e.g., show an error message)
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      // Handle network errors or other unexpected errors
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="bg-white min-h-screen rounded-lg p-4 w-full bg-gradient-to-b from-gray-900 via-gray-800 to-black pt-12 px-4 mx-auto">
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-blackk overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGd9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TS0xOCA0MmMyLjIxIDAgNCAxLjc5IDQgNHMtMS43OSA0LTQgNC00LTEuNzktNC00IDEuNzktNCA0LTR6Ii8+PC9nPjwvc3ZnPg==')]" />
        </div>

        <div className="relative container mx-auto px-4 py-16">
          {/* Statistics Section */}


          {/* Login Form Section */}
          <div className="max-w-md mx-auto">
            <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none backdrop-blur-xl group-hover:border-emerald-500/50 pl-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full px-6 py-4 bg-gray-900/50 text-white rounded-xl border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none backdrop-blur-xl group-hover:border-emerald-500/50 pl-12 pr-12"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      {showPassword ?
                        <EyeOff className="w-5 h-5" /> :
                        <Eye className="w-5 h-5" />
                      }
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-medium shadow-lg hover:shadow-emerald-500/20 transform hover:translate-y-[-2px] transition-all duration-300 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                >
                  Sign In
                </button>
              </form>

              {error && (
                <div className="text-center text-red-500 mt-4">{error}</div>
              )}

              <div className="mt-6 text-center text-gray-400">
                Don't have an account?{' '}
                <Link to="/registration" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Sign up
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
