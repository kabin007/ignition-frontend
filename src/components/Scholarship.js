import React, { useState, useEffect } from 'react';
import { 
  Bell, BookOpen, Award, MessageCircle, X, CheckCircle, 
  Calendar, User, ChevronRight, ExternalLink, Star, 
  Clock, AlertCircle, TrendingUp, BookmarkPlus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';


const NotificationsHub = () => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(0);

  // Mock user data
  const userData = {
    fieldOfInterest: "Computer Science",
    preferredCountries: ["Canada", "USA", "UK"],
    targetUniversities: ["MIT", "Stanford", "University of Toronto"],
    academicScore: 3.8,
    languageScore: 7.5
  };

  // Notification data
//   const notificationData = [
//     {
//       id: 1,
//       type: "success",
//       title: "Application Update",
//       message: "Congratulations! Stanford University has reviewed your application.",
//       time: "2 hours ago",
//       unread: true
//     },
//     {
//       id: 2,
//       type: "deadline",
//       title: "Upcoming Deadline",
//       message: "MIT application deadline in 3 days. Complete your SOP!",
//       time: "5 hours ago",
//       unread: true
//     },
//     {
//       id: 3,
//       type: "scholarship",
//       title: "New Scholarship",
//       message: "You qualify for the Merit Excellence Scholarship - $25,000",
//       time: "1 day ago",
//       unread: false
//     }
//   ];

  // Featured articles data
  const articles = [
    {
      title: "How to Ace Your IELTS Exam",
      category: "Test Prep",
      readTime: "8 min read",
      image: "/api/placeholder/800/400",
      tags: ["IELTS", "Study Tips"]
    },
    {
      title: "Top 10 Countries for Affordable Education",
      category: "Guide",
      readTime: "12 min read",
      image: "/api/placeholder/800/400",
      tags: ["Study Abroad", "Budget"]
    },
    {
      title: "Step-by-Step Visa Application Guide",
      category: "Immigration",
      readTime: "15 min read",
      image: "/api/placeholder/800/400",
      tags: ["Visa", "Documentation"]
    }
  ];

  // Personalized recommendations
  const recommendations = {
    courses: [
      {
        university: "Stanford University",
        program: "MS in Computer Science",
        match: 95,
        deadline: "2025-01-15"
      },
      {
        university: "MIT",
        program: "MEng in Software Engineering",
        match: 92,
        deadline: "2025-02-01"
      }
    ],
    scholarships: [
      {
        name: "Tech Leaders Scholarship",
        amount: "$30,000",
        deadline: "2025-01-30",
        eligibility: "Perfect match"
      },
      {
        name: "International Merit Award",
        amount: "$25,000",
        deadline: "2025-02-15",
        eligibility: "High match"
      }
    ],
    connections: [
      {
        name: "Alex Chen",
        university: "Stanford",
        program: "Computer Science",
        year: "2nd Year"
      },
      {
        name: "Sarah Williams",
        university: "MIT",
        program: "Software Engineering",
        year: "1st Year"
      }
    ]
  };

  // Auto-rotate featured articles
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArticle((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Notification indicator component
//   const NotificationIcon = ({ type }) => {
//     const icons = {
//       success: CheckCircle,
//       deadline: Clock,
//       scholarship: Award,
//       default: AlertCircle
//     };
//     const Icon = icons[type] || icons.default;
//     const colors = {
//       success: "text-green-500",
//       deadline: "text-yellow-500",
//       scholarship: "text-purple-500",
//       default: "text-blue-500"
//     };
    
//     return <Icon className={`h-5 w-5 ${colors[type]}`} />;
//   };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Notifications Panel */}
      {/* <div className="relative">
        <button 
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Bell className="h-6 w-6" />
          {notifications.some(n => n.unread) && (
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
          )}
        </button>

        {showNotifications && (
          <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border 
                         z-50 max-h-[600px] overflow-y-auto">
            <div className="p-4 border-b sticky top-0 bg-white">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Notifications</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Mark all as read
                </button>
              </div>
            </div>
            
            <div className="divide-y">
              {notificationData.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-colors
                             ${notification.unread ? 'bg-blue-50/50' : ''}`}
                >
                  <div className="flex items-start gap-3">
                    <NotificationIcon type={notification.type} />
                    <div className="flex-1">
                      <h4 className="font-medium">{notification.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}

      {/* Featured Articles Carousel */}
      <Card className="overflow-hidden">
        <div className="relative h-64">
          <img 
            src={articles[currentArticle].image}
            alt={articles[currentArticle].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                {articles[currentArticle].category}
              </span>
              <span className="text-xs">
                {articles[currentArticle].readTime}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {articles[currentArticle].title}
            </h3>
            <div className="flex gap-2">
              {articles[currentArticle].tags.map((tag, i) => (
                <span key={i} className="bg-white/30 px-2 py-1 rounded-full text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Personalized Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
              Recommended Courses
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.courses.map((course, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{course.program}</h4>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {course.match}% Match
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{course.university}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Deadline: {new Date(course.deadline).toLocaleDateString()}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Scholarship Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Award className="h-5 w-5 mr-2 text-purple-500" />
              Available Scholarships
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.scholarships.map((scholarship, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{scholarship.name}</h4>
                  <span className="text-green-600 font-semibold">
                    {scholarship.amount}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{scholarship.eligibility}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Due: {new Date(scholarship.deadline).toLocaleDateString()}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Student Connections */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <User className="h-5 w-5 mr-2 text-green-500" />
              Connect with Students
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.connections.map((student, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{student.name}</h4>
                    <p className="text-sm text-gray-600">
                      {student.program} at {student.university}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{student.year}</p>
                  </div>
                </div>
                <button className="w-full mt-3 text-sm text-blue-600 hover:text-blue-700">
                  Connect
                </button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotificationsHub;