import React, { useState } from "react";
import {
  Bell,
  BookOpen,
  Home,
  MessageCircle,
  User,
  Search,
  Book,
  Upload,
  Briefcase,
  Plane,
  Award,
  HelpCircle,
  Globe2,
  ChevronRight,
  Calendar,
  X,
  BarChart,
  Target,
  Clock,
  Bot,
  CircleAlert,
  TrendingUp,
  History
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";

const SmartDashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [recentSearches, setRecentSearches] = useState([
      "MBA programs in Toronto",
      "Scholarships for international students"
    ]);
  
    // Simulated user data
    const userData = {
      name: "Sarah",
      profileProgress: 60,
      applicationsSubmitted: 2,
      totalApplications: 5,
      missingDocuments: ["Transcript", "LOR"],
      recentActivity: new Date("2024-12-27T10:30:00")
    };
  
    // Smart suggestions based on user profile and trends
    const suggestions = {
      trending: [
        "Top universities in Canada",
        "Winter 2025 admissions",
        "IELTS preparation courses"
      ],
      personalized: [
        "MBA programs in Toronto",
        "Business schools in Ontario",
        "International student scholarships"
      ],
      recent: recentSearches
    };
  
    // Time-aware greeting
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good morning";
      if (hour < 17) return "Good afternoon";
      return "Good evening";
    };
  
    // Handle search input
    const handleSearchInput = (e) => {
      setSearchQuery(e.target.value);
      setShowSuggestions(true);
    };
  
    // Handle search selection
    const handleSearchSelect = (search) => {
      setSearchQuery(search);
      setShowSuggestions(false);
      if (!recentSearches.includes(search)) {
        setRecentSearches(prev => [search, ...prev].slice(0, 5));
      }
    };
  
    return (
        <div className="max-w-7xl mx-auto p-4 space-y-6 pb-20">
        {/* Interactive Welcome Section with 3D-like depth */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-20 -translate-y-20" />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white mb-4">
              Welcome back, {userData.name}! 🌏
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interactive Progress Visualization */}
              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">Profile Strength</span>
                  <span className="text-white font-bold">{userData.profileProgress}%</span>
                </div>
                <Progress value={userData.profileProgress} className="h-2 mb-4" />
                <div className="flex gap-2">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} 
                         className={`h-1.5 flex-1 rounded ${
                           i < userData.applicationsSubmitted ? 'bg-green-400' : 'bg-white/30'
                         }`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-white/80 mt-2">
                  {userData.applicationsSubmitted}/{userData.totalApplications} Applications Complete
                </p>
              </div>
  
              {/* Quick Actions */}
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-medium 
                                 flex items-center justify-between group hover:shadow-lg 
                                 transition-all duration-300">
                  <span>Continue Application</span>
                  <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium 
                                 flex items-center justify-between group hover:shadow-lg 
                                 transition-all duration-300">
                  <span>Upload Documents</span>
                  <Upload className="h-5 w-5 transform group-hover:translate-y-[-2px] transition-transform" />
                </button>
                <button className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-medium 
                                 flex items-center justify-between group hover:shadow-lg 
                                 transition-all duration-300">
                  <span>Track Visa Status</span>
                  <Plane className="h-5 w-5 transform group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>
  
            {/* Missing Documents Alert */}
            {userData.missingDocuments.length > 0 && (
              <Alert className="mt-4 bg-white/10 text-white border-none">
                <CircleAlert className="h-5 w-5" />
                <span className="ml-2">
                  Missing documents: {userData.missingDocuments.join(", ")}
                </span>
              </Alert>
            )}
          </div>
        </div>
  
        {/* Enhanced Search Section */}
        <div className="relative">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={handleSearchInput}
              placeholder="Search universities, courses, or scholarships..."
              className="w-full pl-10 pr-12 py-3.5 border rounded-xl shadow-sm 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent
                       text-lg placeholder:text-gray-400"
            />
            {searchQuery && (
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
  
          {/* Smart Suggestions Dropdown */}
          {showSuggestions && (
            <div className="absolute w-full mt-2 bg-white rounded-xl shadow-xl border 
                           divide-y divide-gray-100 z-50">
              {/* Trending Searches */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-500 mb-2 px-3">
                  Trending Searches
                </h3>
                {suggestions.trending.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearchSelect(suggestion)}
                    className="w-full px-3 py-2 flex items-center text-left hover:bg-gray-50 
                             rounded-lg group"
                  >
                    <TrendingUp className="h-4 w-4 text-gray-400 mr-2 
                                       group-hover:text-blue-500" />
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {suggestion}
                    </span>
                  </button>
                ))}
              </div>
  
              {/* Personalized Suggestions */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-500 mb-2 px-3">
                  Recommended for You
                </h3>
                {suggestions.personalized.map((suggestion, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearchSelect(suggestion)}
                    className="w-full px-3 py-2 flex items-center text-left hover:bg-gray-50 
                             rounded-lg group"
                  >
                    <Clock className="h-4 w-4 text-gray-400 mr-2 
                                  group-hover:text-blue-500" />
                    <span className="text-gray-700 group-hover:text-gray-900">
                      {suggestion}
                    </span>
                  </button>
                ))}
              </div>
  
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-500 mb-2 px-3">
                    Recent Searches
                  </h3>
                  {recentSearches.map((search, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearchSelect(search)}
                      className="w-full px-3 py-2 flex items-center text-left hover:bg-gray-50 
                               rounded-lg group"
                    >
                      <History className="h-4 w-4 text-gray-400 mr-2 
                                      group-hover:text-blue-500" />
                      <span className="text-gray-700 group-hover:text-gray-900">
                        {search}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  export default SmartDashboard;