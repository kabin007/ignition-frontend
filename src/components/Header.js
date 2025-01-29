import React from 'react';
import { Bell, MessageSquare, User } from 'lucide-react';

const Header = ({ userName, greetingMessage }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userName}!</h1>
        <p className="text-gray-500">{greetingMessage}</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 relative hover:bg-gray-100 rounded-full">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MessageSquare className="w-6 h-6 text-gray-600" />
        </button>
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full">
          <User className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Header;
