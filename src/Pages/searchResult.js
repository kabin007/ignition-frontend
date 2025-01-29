
import React, { useState, useRef,useEffect } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  MapPin,
  Calendar,
  Circle,
} from "lucide-react";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  LibraryIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";

// SearchResult Component
const SearchResult = ({ courses }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Search Results</h2>
          <button className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 group">
            View All
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses?.length > 0 ? (
            courses.map((course, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between bg-white animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${index * 150}ms forwards`,
                }}
              >
                <div>
                  <div className="mb-3 h-40 bg-gray-200 rounded-lg overflow-hidden group">
                    {course.image ? (
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400 text-sm bg-gradient-to-br from-gray-50 to-gray-200">
                        No Image Available
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-medium text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    {course.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-bold text-green-600">{course.fees}</span> | {course.duration}
                  </p>
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.prerequisites && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:shadow-sm text-gray-700">
                        Prerequisite: {course.prerequisites}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-3 py-2 text-sm bg-gray-50 text-gray-700 border rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group hover:border-blue-200"
                >
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  Learn More
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm">No courses found.</p>
          )}
        </div>
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
        `}
      </style>
    </div>
  );
};

export default SearchResult;
