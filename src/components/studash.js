import React from 'react';
// Reuse the SideNavigation component
import {
  AlertCircle,
  Calendar,
  BookOpen,
  FileCheck,
  MessageSquare,
  Clock,
  ChevronRight,
  Plane
} from 'lucide-react';

const StudentDashboard = () => {
  const notifications = [
    { id: 1, type: 'deadline', message: 'University of Toronto application deadline in 5 days', time: '2 hours ago' },
    { id: 2, type: 'document', message: 'Your IELTS score report has been verified', time: '1 day ago' },
    { id: 3, type: 'update', message: 'Visa application status updated', time: '2 days ago' },
  ];

  const priorityTasks = [
    { id: 1, title: 'Complete University Application', description: 'Submit pending documents for University of Toronto', status: 'urgent', deadline: '5 days remaining' },
    { id: 2, title: 'Book IELTS Test', description: 'Required for final application submission', status: 'pending', deadline: '2 weeks remaining' },
    { id: 3, title: 'Submit Passport Copy', description: 'Required for visa processing', status: 'pending', deadline: '1 week remaining' },
  ];

  const applicationStages = [
    { label: 'Applications submitted', count: 2, icon: <FileCheck className="w-5 h-5 text-blue-500" /> },
    { label: 'Offers received', count: 1, icon: <MessageSquare className="w-5 h-5 text-green-500" /> },
    { label: 'Pending documents', count: 3, icon: <Clock className="w-5 h-5 text-orange-500" /> },
    { label: 'Visa applications', count: 0, icon: <Plane className="w-5 h-5 text-purple-500" /> },
  ];

  return (
    <div className="flex min-h-screen">
      

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        

        {/* Dashboard Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Application Progress */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Application Progress</h2>
            <div className="grid grid-cols-4 gap-4">
              {applicationStages.map((stage, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    {stage.icon}
                    <span className="text-2xl font-bold">{stage.count}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stage.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full p-3 text-left border rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>Schedule Counseling</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              <button className="w-full p-3 text-left border rounded-lg hover:bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-green-500" />
                  <span>View Universities</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Priority Tasks */}
          <div className="col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Priority Tasks</h2>
            <div className="space-y-4">
              {priorityTasks.map(task => (
                <div key={task.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{task.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      task.status === 'urgent' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {task.deadline}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Updates</h2>
            <div className="space-y-4">
              {notifications.map(notification => (
                <div key={notification.id} className="flex items-start gap-3 p-3 border-b last:border-0">
                  <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm">{notification.message}</p>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
