import React, { useState } from "react";
import { CheckCircle2, Circle, CircleCheck, Calendar, ChevronRight } from "lucide-react";
import ApplicationIcons from "./CustomIcons";

const StudyPreferences = ({ onNext, onPrevious, onSaveDraft, isLastStep }) => {
  // State for study preferences
  const [studyPreferences, setStudyPreferences] = useState({
    country: "",
    course: "",
    studyMode: "",
    intake: "",
    highestAcademic: "",
    cgpa: "",
    feeStructure: "",
  });

  // State for language tests
  const [languageTests, setLanguageTests] = useState({
    IELTS: { selected: false, score: "", date: "" },
    TOEFL: { selected: false, score: "", date: "" },
    PTE: { selected: false, score: "", date: "" },
  });

  // State for other tests
  const [otherTests, setOtherTests] = useState({
    GRE: { selected: false, score: "", date: "" },
    GMAT: { selected: false, score: "", date: "" },
    SAT: { selected: false, score: "", date: "" },
  });

  // Handle test toggle
  const handleTestToggle = (type, test) => {
    const setter = type === "language" ? setLanguageTests : setOtherTests;
    setter((prev) => ({
      ...prev,
      [test]: { ...prev[test], selected: !prev[test].selected },
    }));
  };

  // Handle input changes for test scores or dates
  const handleInputChange = (type, test, value, field) => {
    const setter = type === "language" ? setLanguageTests : setOtherTests;
    setter((prev) => ({
      ...prev,
      [test]: { ...prev[test], [field]: value },
    }));
  };

  // Render cards dynamically
  const renderTestCards = (type, tests) =>
    Object.entries(tests).map(([test, data]) => (
      <div
        key={test}
        className="p-4 border border-gray-200 rounded-lg hover:shadow-md hover:bg-gray-50 transition-all duration-300 flex flex-col"
      >
        <div className="flex items-center gap-3 mb-2">
          <ApplicationIcons iconType="document" size={30} color="#4CAF50" />
          <h3 className="font-medium text-gray-900">{test}</h3>
          <label className="flex items-center ml-auto">
            <input
              type="checkbox"
              className="hidden"
              checked={data.selected}
              onChange={() => handleTestToggle(type, test)}
            />
            {data.selected ? (
              <CircleCheck className="text-green-500 w-5 h-5" />
            ) : (
              <Circle className="text-gray-300 w-5 h-5" />
            )}
          </label>
        </div>

        {data.selected && (
          <>
            <div className="mt-2">
              <label className="text-sm text-gray-600">Score</label>
              <input
                type="number"
                value={data.score}
                onChange={(e) =>
                  handleInputChange(type, test, e.target.value, "score")
                }
                className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your score"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Test Date</label>
              <div className="relative">
                <Calendar className="absolute top-2 left-2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  value={data.date}
                  onChange={(e) =>
                    handleInputChange(type, test, e.target.value, "date")
                  }
                  className="w-full mt-1 pl-10 p-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </>
        )}
      </div>
    ));

  // Dropdown options
  const countries = ["United States", "Canada", "United Kingdom", "Australia"];
  const courses = ["Computer Science", "Business Administration", "Engineering"];
  const studyModes = ["Full-Time", "Part-Time", "Online"];
  const highestAcademics = [
    "High School Diploma",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
  ];
  const feeStructures = ["Basic", "Medium", "Premium"];

  // Handle study preference changes
  const handlePreferenceChange = (field, value) => {
    setStudyPreferences((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Study Preferences & Test Scores
      </h1>

      {/* Study Preferences Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Study Preferences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Fields */}
          {[
            { label: "Preferred Country", field: "country", options: countries },
            { label: "Preferred Course", field: "course", options: courses },
            { label: "Study Mode", field: "studyMode", options: studyModes },
            {
              label: "Highest Academic Qualification",
              field: "highestAcademic",
              options: highestAcademics,
            },
            { label: "College Fee Structure", field: "feeStructure", options: feeStructures },
          ].map(({ label, field, options }) => (
            <div key={field}>
              <label className="text-sm text-gray-600 block mb-2">{label}</label>
              <select
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={studyPreferences[field]}
                onChange={(e) => handlePreferenceChange(field, e.target.value)}
              >
                <option value="">Select {label.toLowerCase()}</option>
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </section>

      {/* Test Scores Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Test Scores</h2>

        {/* Language Tests */}
        <section className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Language Tests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderTestCards("language", languageTests)}
          </div>
        </section>

        {/* Other Tests */}
        <section>
          <h3 className="text-lg font-medium text-gray-700 mb-4">Other Tests</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderTestCards("other", otherTests)}
          </div>
        </section>
      </section>

      {/* Save & Submit */}
      <div className="mt-6 flex items-center justify-between">
  <button
    onClick={onPrevious}
    className="px-4 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-all duration-300"
  >
    Back
  </button>
  <div className="flex items-center gap-4">
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
  );
};

export default StudyPreferences;