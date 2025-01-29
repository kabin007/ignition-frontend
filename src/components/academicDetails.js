import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Globe, 
  Calendar, 
  Award, 
  ChevronRight,
  MapPin,
  Clock,
  Info,
  AlertCircle,
  
} from 'lucide-react';

const AcademicDetails = ({  handleEducationChange, onPrevious, onNext, onSaveDraft, isLastStep, isFirstStep }) => {
  const [formData, setFormData] = useState({
    education: {
      highestLevel: '',
      completionYear: '',
      country: '',
      obtainedMarks: '',
      backlogs: '',
      educationGap: '',
      gapReason: '',
    },
    preferences: {
      intendedStudyArea: '',
      courseLevel: '',
      destinations: ['', '', ''],
      intake: ''
    }
  });

  // Available options for dropdowns
  const educationLevels = [
    'High School',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Diploma',
    'Other'
  ];

  const courseLevels = [
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Diploma',
    'Certificate'
  ];

  const studyAreas = [
    'Computer Science',
    'Engineering',
    'Business',
    'Arts',
    'Medicine',
    'Law'
  ];

  const intakes = [
    'Fall 2024',
    'Spring 2025',
    'Summer 2025',
    'Fall 2025'
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleDestinationChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        destinations: prev.preferences.destinations.map((dest, i) => 
          i === index ? value : dest
        )
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-9">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Left Sidebar with Checklist */}

          <div className="space-y-6">
            {/* Application Checklist Card */}
           

            {/* Academic Profile Guidelines Card */}
            {/* <div className="bg-white p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Academic Profile Guidelines
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Complete your academic history accurately</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>All academic gaps must be explained</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>Higher academic scores increase admission chances</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Choose destinations aligned with your career goals
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Original documents may be required during visa processing
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Educational Background Section */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Educational Background
                </h2>
                <p className="text-gray-600 mt-1">
                  Enter your highest academic qualification details
                </p>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Highest Level of Education
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.highestLevel}
                      onChange={(e) =>
                        handleEducationChange("highestLevel", e.target.value)
                      }
                    >
                      <option value="">Select Education Level</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Year of Completion<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.completionYear}
                      onChange={(e) =>
                        handleEducationChange("completionYear", e.target.value)
                      }
                      placeholder="YYYY"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Country of Education
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.country}
                      onChange={(e) =>
                        handleEducationChange("country", e.target.value)
                      }
                      placeholder="Enter country"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Obtained Marks/CGPA<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.obtainedMarks}
                      onChange={(e) =>
                        handleEducationChange("obtainedMarks", e.target.value)
                      }
                      placeholder="Enter marks/CGPA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Number of Backlogs
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.backlogs}
                      onChange={(e) =>
                        handleEducationChange("backlogs", e.target.value)
                      }
                      placeholder="Enter number of backlogs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Education Gap (in years)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.educationGap}
                      onChange={(e) =>
                        handleEducationChange("educationGap", e.target.value)
                      }
                      placeholder="Enter gap in years"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="text-sm font-medium text-gray-700">
                      Reason for Gap (if any)
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      value={formData.education.gapReason}
                      onChange={(e) =>
                        handleEducationChange("gapReason", e.target.value)
                      }
                      placeholder="Explain any gaps in your education"
                      rows="3"
                    />
                  </div>
                </div>

                {/* Study Preferences Section */}
               
              </div>
            </div>


            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-between">
    {!isFirstStep && ( 
      <button
        onClick={onPrevious}
        className="px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300"
      >
        Back
      </button>
    )}
    <div className="flex items-center gap-4 ml-auto">
      <button
        onClick={onSaveDraft}
        className="px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300"
      >
        Save as Draft
      </button>
      <button
        onClick={onNext}
        className={`px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${
          isLastStep ? "bg-green-500 hover:bg-green-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"
        } transition-all duration-300`}
      >
        {isLastStep ? "Submit Application" : "Save & Continue"}
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  </div>
          </div>
        </div>
      </main>
    </div>
  );

};

export default AcademicDetails;