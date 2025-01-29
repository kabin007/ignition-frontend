import React from 'react';
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  MessageSquare,
  User,
  ChevronRight,
  Calendar,
  FileCheck,
  AlertCircle,
  Clock,
  BookOpen,
  Plane,
  Plus,
  ArrowUpRight,
  FileText,
  Building,
  CheckCircle,
  File
} from 'lucide-react';
import ApplicationIcons from '../components/CustomIcons';

const StudentDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    
    // Access the nested user object
    if (userData && userData.user) {
      setUser(userData.user);  // Set just the user object, not the whole data
    }
  }, []);



  const notifications = [
    { id: 1, type: 'deadline', message: 'University of Toronto application deadline in 5 days', time: '2 hours ago' },
    { id: 2, type: 'document', message: 'Your IELTS score report has been verified', time: '1 day ago' },
    { id: 3, type: 'update', message: 'Visa application status updated', time: '2 days ago' }
  ];

  const priorityTasks = [
    { id: 1, title: 'Complete University Application', description: 'Submit pending documents for University of Toronto', status: 'urgent', deadline: '5 days remaining' },
    { id: 2, title: 'Book IELTS Test', description: 'Required for final application submission', status: 'pending', deadline: '2 weeks remaining' },
    { id: 3, title: 'Submit Passport Copy', description: 'Required for visa processing', status: 'pending', deadline: '1 week remaining' }
  ];

  const applicationStages = [
    {
      label: 'Applications submitted',
      count: 2,
      totalCount: 5,
      schools: ['University of Toronto', 'McGill University'],
      icon: <ApplicationIcons iconType="application" size={30} color="#42A5F5" />,
      secondaryIcon: <Building className="w-4 h-4 text-blue-400" />,
      actionIcon: <FileText className="w-4 h-4" />,
      buttonText: 'Update Status',
      stats: 'Target: 5 universities'
    },
    {
      label: 'Offers received',
      count: 1,
      schools: ['University of Toronto'],
      icon: <ApplicationIcons iconType="offerReceived" size={30} color="#66BB6A" />,
      secondaryIcon: <ArrowUpRight className="w-4 h-4 text-green-400" />,
      actionIcon: <MessageSquare className="w-4 h-4" />,
      buttonText: 'View Offers',
      stats: 'Acceptance rate: 50%'
    },
    {
      label: 'Pending documents',
      count: 3,
      documents: ['Transcripts', 'SOP', 'Recommendations'],
      icon: <ApplicationIcons iconType="pendingDocument" size={30} color="#FFA726" />,
      secondaryIcon: <Clock className="w-4 h-4 text-orange-400" />,
      actionIcon: <Plus className="w-4 h-4" />,
      buttonText: 'Upload Documents',
      stats: 'Due in 5 days'
    },
    {
      label: 'Visa applications',
      count: 0,
      status: 'Not Started',
      icon: <ApplicationIcons iconType="visaApplication" size={30} color="#AB47BC" />,
      secondaryIcon: <Plane className="w-4 h-4 text-purple-400" />,
      actionIcon: <FileText className="w-4 h-4" />,
      buttonText: 'Start Application',
      stats: 'Required for 2 countries'
    }
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <motion.div 
        className="flex-1 p-4 lg:p-6 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Section */}
        <motion.div 
          className="bg-white shadow-md rounded-lg p-6 mb-6 mt-6"
          {...fadeIn}
          whileHover={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        >
          <h1 className="text-2xl font-bold">Hi, {user?.first_name} {user?.last_name}!</h1>
          <p className="text-gray-600">
            Welcome back, Ignite your Study Abroad Journey !!
          </p>
        </motion.div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Application Progress Section */}
          <motion.div 
            className="bg-white rounded-lg shadow p-6"
            {...fadeIn}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Application Progress</h2>
              <motion.button 
                className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1"
                whileHover={{ x: 5 }}
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {applicationStages.map((stage, index) => (
                <motion.div
                  key={index}
                  className="p-4 border rounded-lg hover:shadow-md transition-all flex flex-col justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="p-2 bg-gray-50 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {stage.icon}
                        </motion.div>
                        {stage.secondaryIcon}
                      </div>
                      <span className="text-2xl font-bold">{stage.count}</span>
                    </div>
                    <p className="text-sm font-medium mb-2">{stage.label}</p>
                    <div className="mb-3">
                      {stage.schools && (
                        <div className="text-xs text-gray-500 mt-1">
                          {stage.schools.map((school, i) => (
                            <div key={i} className="flex items-center gap-1">
                              <Building className="w-3 h-3" />
                              {school}
                            </div>
                          ))}
                        </div>
                      )}
                      {stage.documents && (
                        <div className="text-xs text-gray-500 mt-1">
                          {stage.documents.map((doc, i) => (
                            <div key={i} className="flex items-center gap-1">
                              <FileText className="w-3 h-3" />
                              {doc}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">{stage.stats}</div>
                  </div>
                  <motion.button 
                    className="mt-auto px-3 py-2 text-sm bg-gray-50 text-gray-700 border rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {stage.actionIcon}
                    {stage.buttonText}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Priority Tasks and Recent Updates */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Priority Tasks */}
            <motion.div 
              className="lg:col-span-2 bg-white rounded-lg shadow p-6"
              {...fadeIn}
            >
              <h2 className="text-lg font-semibold mb-4">Priority Tasks</h2>
              <div className="space-y-4">
                {priorityTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    className="p-4 border rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{task.title}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          task.status === "urgent"
                            ? "bg-red-100 text-red-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {task.deadline}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Updates */}
            <motion.div 
              className="bg-white rounded-lg shadow p-6"
              {...fadeIn}
            >
              <h2 className="text-lg font-semibold mb-4">Recent Updates</h2>
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    className="flex items-start gap-3 p-3 border-b last:border-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    </motion.div>
                    <div>
                      <p className="text-sm">{notification.message}</p>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentDashboard;