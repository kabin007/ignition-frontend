import React from 'react';
import { ChevronRight, User, Calendar, MapPin, FileText, Clock, BookOpen, Upload } from 'lucide-react';

const ApplicationHeader = ({ currentStep, applicationId }) => {
  const steps = [
    { id: 1, title: 'Personal Details', icon: User, status: 'current' },
    { id: 2, title: 'Academic History', icon: FileText, status: 'upcoming' },
    { id: 3, title: 'Course Selection', icon: BookOpen, status: 'upcoming' },
    { id: 4, title: 'Document Upload', icon: Upload, status: 'upcoming' }
  ];

  

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Main Header Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Left Section */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Personal Details
              </h1>
              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Step 1 of 4: Basic Information
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-600 border border-gray-200 hover:border-blue-200 transition-all duration-300">
              <span className="font-medium text-gray-700">Application ID:</span>{' '}
              <span className="text-blue-600">{applicationId}</span>
            </div>
            <button className="px-4 py-2 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 group">
              Save Progress
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  step.id === currentStep
                    ? 'bg-blue-50 border-blue-200'
                    : 'bg-gray-50 border-gray-200'
                } transition-all duration-300 hover:shadow-md`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: `fadeIn 0.5s ease-out ${index * 150}ms forwards`
                }}
              >
                <div className={`p-2 rounded-lg ${
                  step.id === currentStep ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    step.id === currentStep ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    step.id === currentStep ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    Step {step.id}
                  </p>
                  <p className="text-xs text-gray-500">{step.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default ApplicationHeader;