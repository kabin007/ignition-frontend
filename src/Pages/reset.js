import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Check, X } from 'lucide-react';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState({
    new: false,
    confirm: false
  });
  const [validation, setValidation] = useState({
    newPassword: { isValid: false, message: '' },
    confirmPassword: { isValid: false, message: '' },
    passwordStrength: {
      length: false,
      number: false,
      special: false,
      uppercase: false
    }
  });

  const validatePassword = (password) => {
    const strength = {
      length: password.length >= 8,
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      uppercase: /[A-Z]/.test(password)
    };
    const allValid = Object.values(strength).every(Boolean);

    setValidation((prev) => ({
      ...prev,
      newPassword: {
        isValid: allValid,
        message: allValid ? 'Strong password!' : 'Password must meet all requirements'
      },
      passwordStrength: strength
    }));
  };

  const validateConfirmPassword = (confirmPassword) => {
    const isValid = confirmPassword === formData.newPassword;

    setValidation((prev) => ({
      ...prev,
      confirmPassword: {
        isValid,
        message: isValid ? 'Passwords match!' : 'Passwords do not match'
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation.newPassword.isValid && validation.confirmPassword.isValid) {
      console.log('Password reset successfully!');
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden">
      <div className="w-full h-1/2 max-w-lg mx-auto bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Field */}
          <div className="space-y-2">
            <div className="relative group">
              <input
                type={showPassword.new ? 'text' : 'password'}
                placeholder="New Password"
                className={`w-full px-6 py-4 bg-gray-900/50 text-white rounded-xl border focus:ring-2 outline-none backdrop-blur-xl pl-12 pr-12 ${
                  formData.newPassword
                    ? validation.newPassword.isValid
                      ? 'border-green-500 focus:ring-green-500/20'
                      : 'border-red-500 focus:ring-red-500/20'
                    : 'border-gray-700 focus:border-emerald-500 focus:ring-emerald-500/20'
                }`}
                value={formData.newPassword}
                onChange={(e) => {
                  setFormData({ ...formData, newPassword: e.target.value });
                  validatePassword(e.target.value);
                }}
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="space-y-2">
            <div className="relative group">
              <input
                type={showPassword.confirm ? 'text' : 'password'}
                placeholder="Confirm New Password"
                className={`w-full px-6 py-4 bg-gray-900/50 text-white rounded-xl border focus:ring-2 outline-none backdrop-blur-xl pl-12 pr-12 ${
                  formData.confirmPassword
                    ? validation.confirmPassword.isValid
                      ? 'border-green-500 focus:ring-green-500/20'
                      : 'border-red-500 focus:ring-red-500/20'
                    : 'border-gray-700 focus:border-emerald-500 focus:ring-emerald-500/20'
                }`}
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  validateConfirmPassword(e.target.value);
                }}
              />
              <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formData.confirmPassword && (
              <div className="flex items-center gap-2 mt-1">
                {validation.confirmPassword.isValid ? (
                  <Check className="text-green-500 w-5 h-5" />
                ) : (
                  <X className="text-red-500 w-5 h-5" />
                )}
                <p
                  className={`text-sm ${
                    validation.confirmPassword.isValid ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {validation.confirmPassword.message}
                </p>
              </div>
            )}
          </div>

          {/* Password Strength */}
          <div className="mt-4">
            <h3 className="text-sm text-gray-400 mb-2">Password Requirements:</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: '8+ Characters', valid: validation.passwordStrength.length },
                { label: 'Numbers', valid: validation.passwordStrength.number },
                { label: 'Special Characters', valid: validation.passwordStrength.special },
                { label: 'Uppercase Letters', valid: validation.passwordStrength.uppercase }
              ].map((req, index) => (
                <div
                  key={index}
                  className={`text-xs flex items-center gap-1 ${
                    req.valid ? 'text-green-500' : 'text-gray-400'
                  }`}
                >
                  <Check className="w-4 h-4" /> {req.label}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 transition-all"
            disabled={
              !validation.newPassword.isValid || !validation.confirmPassword.isValid
            }
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
