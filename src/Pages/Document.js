import React, { useState } from "react";
import {
  Upload,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  ChevronRight,
  Info,
  Award,
  BookOpen,
  GraduationCap,
  Calendar,
  MapPin,
  CircleCheck,
  Circle,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import ApplicationIcons from "../components/CustomIcons";

const StudyAbroadPortal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [documents, setDocuments] = useState([
    {
      id: "passport",
      title: "Passport Copy",
      description: "Scanned copy of your current passport",
      status: null,
      requirements: "PDF or JPG format, max 5MB",
      required: true,
      category: "Personal Documents",
    },
    {
      id: "photo",
      title: "Passport Size Photo",
      description: "Recent photograph (last 6 months)",
      status: null,
      requirements: "JPEG format, 600x600px, max 2MB",
      required: true,
      category: "Personal Documents",
    },
    {
      id: "transcripts",
      title: "Academic Transcripts",
      description: "Official academic records from your institution",
      status: null,
      requirements: "PDF format only, max 10MB",
      required: true,
      category: "Academic Documents",
    },
    {
      id: "diploma",
      title: "Degree Certificate",
      description: "Copy of your highest degree certificate",
      status: null,
      requirements: "PDF format, max 5MB",
      required: true,
      category: "Academic Documents",
    },
    {
      id: "recommendation",
      title: "Recommendation Letters",
      description: "Two letters from academic references",
      status: null,
      requirements: "PDF format, max 5MB per letter",
      required: true,
      category: "Academic Documents",
    },
    {
      id: "language",
      title: "Language Proficiency",
      description: "IELTS/TOEFL score report",
      status: null,
      requirements: "PDF format, max 5MB",
      required: true,
      category: "Test Scores",
    },
    {
      id: "financial",
      title: "Financial Documents",
      description: "Bank statements or sponsorship letters",
      status: null,
      requirements: "PDF format, max 10MB",
      required: true,
      category: "Financial Documents",
    },
  ]);

  const [applicationProgress, setApplicationProgress] = useState({
    documentsUploaded: 0,
    totalDocuments: documents.length,
    status: "in-progress",
  });

  const categories = [...new Set(documents.map((doc) => doc.category))];

  const handleFileUpload = (docId, event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments((docs) =>
        docs.map((doc) =>
          doc.id === docId ? { ...doc, status: "uploading" } : doc
        )
      );

      setTimeout(() => {
        setDocuments((docs) =>
          docs.map((doc) =>
            doc.id === docId ? { ...doc, status: "completed", file } : doc
          )
        );
        updateProgress();
      }, 2000);
    }
  };

  const updateProgress = () => {
    const completedDocs = documents.filter(
      (doc) => doc.status === "completed"
    ).length;
    setApplicationProgress((prev) => ({
      ...prev,
      documentsUploaded: completedDocs,
      status: completedDocs === documents.length ? "completed" : "in-progress",
    }));
  };

  const removeFile = (docId) => {
    setDocuments((docs) =>
      docs.map((doc) => (doc.id === docId ? { ...doc, status: null } : doc))
    );
    updateProgress();
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-9">
      {/* Header */}
    

      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Application Checklist
              </h3>
              <div className="space-y-6">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 hover:shadow-sm transition-all duration-300"
                  >
                    <h4 className="text-sm font-medium text-gray-800 mb-3">
                      {category}
                    </h4>
                    <ul className="space-y-2">
                      {documents
                        .filter((doc) => doc.category === category)
                        .map((doc) => (
                          <li
                            key={doc.id}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            {doc.status === "completed" ? (
                              <CircleCheck className="w-4 h-4 text-green-500" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-300" />
                            )}
                            <span
                              className={`${
                                doc.status === "completed"
                                  ? "text-gray-800 font-medium"
                                  : "text-gray-600"
                              } hover:text-blue-600 transition-colors`}
                            >
                              {doc.title}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines */}
            <div className="mt-6 bg-white p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upload Guidelines
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>All documents must be clear and legible</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Ensure all documents are in English or include certified
                    translations
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md transition-all duration-300">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Original documents may be required during visa processing
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Document Upload Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  Document Upload
                </h2>
                <p className="text-gray-600 mt-1">
                  Upload all required documents in the specified format
                </p>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <div
                    key={doc.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:bg-gray-50 transition-all duration-300 flex flex-col"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: `fadeIn 0.5s ease-out forwards`,
                    }}
                  >
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <ApplicationIcons
                          iconType="document"
                          size={30}
                          color="#2196F3"
                        />
                        <h3 className="font-medium text-gray-900">
                          {doc.title}
                          {doc.required && (
                            <span className="ml-2 text-xs text-red-500 font-normal">
                              Required
                            </span>
                          )}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {doc.description}
                      </p>
                      <p className="text-xs text-gray-500">
                        {doc.requirements}
                      </p>
                    </div>

                    <div className="mt-auto">
                      {doc.status === "completed" ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-2 rounded-lg">
                            <CheckCircle2 className="w-5 h-5" />
                            <span className="text-sm">Uploaded</span>
                          </div>
                          <button
                            onClick={() => removeFile(doc.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            aria-label="Remove file"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      ) : doc.status === "uploading" ? (
                        <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg">
                          <Clock className="w-5 h-5 animate-spin" />
                          <span className="text-sm">Uploading...</span>
                        </div>
                      ) : (
                        <label
                          htmlFor={doc.id}
                          className="relative cursor-pointer"
                        >
                          <input
                            type="file"
                            id={doc.id}
                            className="hidden"
                            onChange={(e) => handleFileUpload(doc.id, e)}
                          />
                          <div
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 
                  hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300"
                          >
                            <Upload className="w-5 h-5" />
                            <span className="text-sm">Choose File</span>
                          </div>
                        </label>
                      )}
                    </div>

                    {doc.status === "uploading" && (
                      <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 animate-progress-bar"
                          style={{ width: `${doc.progress || 0}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-between">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium">
                Save as Draft
              </button>
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium flex items-center gap-2
        ${
          applicationProgress.documentsUploaded ===
          applicationProgress.totalDocuments
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        } transition-all duration-300`}
              >
                {applicationProgress.documentsUploaded ===
                applicationProgress.totalDocuments
                  ? "Submit Application"
                  : "Save & Continue"}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <style>
              {`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-progress-bar {
        transition: width 0.5s ease-in-out;
      }
    `}
            </style>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes progress-bar {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }

        .animate-progress-bar {
          animation: progress-bar 2s ease-in-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StudyAbroadPortal;
