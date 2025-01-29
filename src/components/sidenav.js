import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Home,
  Search,
  FileText,
  Globe,
  Users,
  Settings,
  HelpCircle,
  Bell,
  User,
  Menu,
  FileCheck,
  DollarSign,
  ChevronRight,
  X,
  Calendar,
  Star,
  LogOut,
} from "lucide-react";
import {useNavigate} from 'react-router-dom';

const PremiumNavigation = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const [showContextualHelp, setShowContextualHelp] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate=useNavigate()

  const userMenuRef = useRef(null);
  const notificationRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
        setShowNotifications(false);
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  // Track user interaction time for contextual help
  useEffect(() => {
    const interval = setInterval(() => {
      const timeSinceLastInteraction = Date.now() - lastInteractionTime;
      if (timeSinceLastInteraction > 30000) {
        setShowContextualHelp(true);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [lastInteractionTime]);

  const iconsMap = {
    home: Home,
    courseSearch: Search,
    myApplications: FileCheck,
    visaStatus: Globe,
    countryGuide: Globe,
    community: Users,
    settings: Settings,
    helpCenter: HelpCircle,
    myFinance: DollarSign,
  };

  const notifications = [
    {
      id: 1,
      title: "Application Update",
      message: "Your visa application has been processed",
      time: "2m ago",
      type: "success",
    },
    {
      id: 2,
      title: "New Course Available",
      message: "Check out the new Data Science program",
      time: "1h ago",
      type: "info",
    },
  ];

  const sideNavItems = [
    { id: "/", icon: "home", label: "Home", path: "/", badge: null },
    {
      id: "/course-search",
      icon: "courseSearch",
      label: "Course Search",
      path: "/course-search",
      badge: "New",
    },
    {
      id: "/applications",
      icon: "myApplications",
      label: "My Applications",
      path: "/applications",
      badge: "2",
    },
    {
      id: "/visa",
      icon: "visaStatus",
      label: "Visa Status",
      path: "/visa",
      badge: null,
    },
    {
      id: "/countries",
      icon: "countryGuide",
      label: "Country Guide",
      path: "/countries",
      badge: null,
    },
    {
      id: "/community",
      icon: "community",
      label: "Community",
      path: "/community",
      badge: "5+",
    },
    {
      id: "/settings",
      icon: "settings",
      label: "Settings",
      path: "/settings",
      badge: null,
    },
    {
      id: "/help",
      icon: "helpCenter",
      label: "Help Center",
      path: "/help",
      badge: null,
    },
    {
      id: "/finance-management",
      icon: "myFinance",
      label: "My Finance",
      path: "/finance-management",
      badge: null,
    },
  ];

  const CustomNavigationIcons = ({ name, ...props }) => {
    const IconComponent = iconsMap[name];
    return IconComponent ? <IconComponent {...props} /> : null;
  };

  // Filter navigation items based on search
  const filteredNavItems = searchQuery
    ? sideNavItems.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sideNavItems;

  const handleInteraction = useCallback(() => {
    setLastInteractionTime(Date.now());
    setShowContextualHelp(false);
  }, []);

  // Animation variants for menu items
  const getAnimationDelay = (index) => `${index * 50}ms`;

  //function that handles the user logout
  const handleLogout = () => {
    // Remove token or user-related data from localStorage
    localStorage.removeItem('user'); // Replace 'authToken' with the actual key you are using
  
    // navigate to the login page
    navigate('/login')
  };

  return (
    <div
      className="min-h-screen bg-gray-50 flex flex-col lg:flex-row"
      onClick={handleInteraction}
    >
      {/* Premium Header */}
      <header
        className={`fixed top-0 left-0 right-0 h-16 bg-white z-50 flex items-center justify-between px-4 transition-all duration-500 
        ${isScrolled ? "shadow-lg border-b border-gray-100" : "shadow-sm"}`}
      >
        {/* Previous header content remains the same */}
        {/* ... */}

        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={20} />
          </button>
          <a href="/" className="text-green-600 font-bold text-xl">
            Adventus.io
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              className="relative p-2 rounded-full hover:bg-gray-100"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-6 w-6" />
            </button>
          </div>
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <User className="h-6 w-6" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <a
                  href="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </a>
                <button className="block px-4 py-2 text-left w-full hover:bg-gray-100" onClick={handleLogout}>
                        Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Enhanced Sidebar */}
      <aside
        ref={sidebarRef}
        className={`sticky inset-y-0 left-0 z-40 bg-white w-72 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static transition-transform duration-500 shadow-xl border-r border-gray-100 sticky`}
      >
        <nav className="py-20 h-full overflow-y-auto">
          <div className="px-4 mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100
                transition-all duration-300 text-sm"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="space-y-1 px-2">
            {filteredNavItems.map((item, index) => (
              <a
                key={item.id}
                href={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 group transition-all duration-300 relative
                  ${
                    activeItem === item.path
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5"
                  }`}
                onClick={() => {
                  setActiveItem(item.path);
                  handleInteraction();
                  if (window.innerWidth < 1024) {
                    setIsSidebarOpen(false);
                  }
                }}
                style={{
                  animationDelay: getAnimationDelay(index),
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out forwards ${getAnimationDelay(
                    index
                  )}`,
                }}
              >
                <CustomNavigationIcons
                  name={item.icon}
                  className={`w-5 h-5 transition-all duration-300 ${
                    activeItem === item.path
                      ? "text-blue-600 transform scale-110"
                      : "text-gray-500 group-hover:text-blue-600 group-hover:scale-110"
                  }`}
                />
                <span className="text-sm font-medium">{item.label}</span>

                {item.badge && (
                  <span
                    className={`absolute right-4 px-2 py-0.5 rounded-full text-xs font-medium 
                    ${
                      activeItem === item.path
                        ? "bg-blue-200 text-blue-700"
                        : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                    } transition-all duration-300`}
                  >
                    {item.badge}
                  </span>
                )}

                <div
                  className={`absolute left-0 w-1 h-8 rounded-r-full bg-blue-500 transform transition-all duration-300 
                  ${
                    activeItem === item.path
                      ? "scale-y-100"
                      : "scale-y-0 group-hover:scale-y-50"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-8 left-0 right-0 px-4 ">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
              <h4 className="text-sm font-medium text-blue-700 mb-2">
                Need Help?
              </h4>
              <p className="text-xs text-blue-600 mb-3">
                Contact our support team for assistance
              </p>
              <button
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => {
                  // Handle support contact
                  handleInteraction();
                }}
              >
                Contact Support
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
     

      {/* Enhanced Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-30 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-500"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Contextual Help Tooltip */}
      {showContextualHelp && (
        <div className="fixed bottom-4 right-4 max-w-xs bg-white p-4 rounded-lg shadow-xl border border-gray-100 animate-fade-in-up z-50">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowContextualHelp(false)}
          >
            <X className="w-4 h-4" />
          </button>
          <h4 className="text-sm font-medium text-gray-800 mb-2">
            Need assistance?
          </h4>
          <p className="text-xs text-gray-600 mb-3">
            We noticed you haven't interacted in a while. Need help finding
            something?
          </p>
          <button
            className="text-xs text-blue-600 hover:text-blue-700 font-medium"
            onClick={() => setShowContextualHelp(false)}
          >
            Take a tour
          </button>
        </div>
      )}

      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default PremiumNavigation;
