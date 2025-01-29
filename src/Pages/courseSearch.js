import React, { useState, useRef, useEffect } from "react";
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
import SearchResult from "./searchResult";



const CourseSearchHero = () => {
  const [selectedStudent, setSelectedStudent] = useState("");

  const scholarshipRef = useRef(null);
  const recommendedRef = useRef(null);
  const [faculties, setFaculties] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [courses, setCourses] = useState([])
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // Fetch faculties and countries data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [facultiesResponse, countriesResponse] = await Promise.all([
          fetch("http://localhost:8000/api/courses/faculty"),
          fetch("http://localhost:8000/api/countries/"),
        ]);

        if (!facultiesResponse.ok || !countriesResponse.ok) {
          throw new Error("Failed to fetch data from the server");
        }

        const [facultiesData, countriesData] = await Promise.all([
          facultiesResponse.json(),
          countriesResponse.json(),
        ]);

        setFaculties(facultiesData);
        setCountries(countriesData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, []);


  //function that takes the selected faculty and country and returns mathching courses
  const handleSearchCourses = async () => {
    const formData={
      faculty:selectedFaculty,
      country:selectedNationality
    }
    if (!selectedNationality || !selectedFaculty) {
      setError("Please select both country and faculty.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/courses/search/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setCourses(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };


  const getIntakeColor = (intake) => {
    const month = intake.split(' ')[0].toLowerCase();
    switch (month) {
      case 'jan': return 'bg-blue-100 text-blue-600';
      case 'feb': return 'bg-green-100 text-green-600';
      case 'mar': return 'bg-orange-100 text-orange-600';
      case 'apr': return 'bg-purple-100 text-purple-600';
      case 'may': return 'bg-pink-100 text-pink-600';
      case 'jun': return 'bg-yellow-100 text-yellow-600';
      case 'jul': return 'bg-indigo-100 text-indigo-600';
      case 'aug': return 'bg-red-100 text-red-600';
      case 'sep': return 'bg-teal-100 text-teal-600';
      case 'oct': return 'bg-cyan-100 text-cyan-600';
      case 'nov': return 'bg-amber-100 text-amber-600';
      case 'dec': return 'bg-lime-100 text-lime-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const scroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = 800;
      ref.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };


  const featuredCourses = [
    {
      name: "Introduction to Machine Learning",
      image: "https://via.placeholder.com/150",
      tuitionFee: "$2000",
      type: "Online",
      duration: "3 months",
      intakes: ["Jan 2024", "May 2024", "Sep 2024"],
      url: "https://example.com/courses/data-science",
    },
    {
      name: "Full Stack Web Development",
      image: null,
      tuitionFee: "$2500",
      type: "On-Campus",
      duration: "6 months",
      intakes: ["Feb 2024", "Aug 2024"],
      url: "https://example.com/courses/data-science",
    },
    {
      name: "Master of Science in Data Science",
      image: null,
      tuitionFee: "$250/Sem",
      type: "On-campus",
      duration: "2 years",
      intakes: ["Feb 2025", "Mar 2025", "Apr 2025"],
      url: "https://example.com/courses/data-science",
    },
  ];



  const statistics = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 text-emerald-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >

          <path
            d="M32 12 L8 24 L32 36 L56 24 Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            d="M32 12 L56 24"
            strokeDasharray="4 4"
            strokeLinecap="round"
            opacity="0.5"
          />

          <line
            x1="32"
            y1="36"
            x2="32"
            y2="54"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="32"
            cy="54"
            r="2"
            fill="currentColor"
            stroke="none"
          />

          <rect
            x="16"
            y="38"
            width="32"
            height="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      ),
      value: "15,000+",
      label: "Students Enrolled",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 text-emerald-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >

          <circle cx="32" cy="16" r="8" fill="none" strokeLinecap="round" />


          <path
            d="M24 28 Q32 24 40 28 L40 44 Q40 50 36 52 L28 52 Q24 50 24 44 Z"
            fill="none"
            strokeLinejoin="round"
          />


          <path
            d="M24 32 L16 40"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M40 32 L48 40"
            fill="none"
            strokeLinecap="round"
          />


          <rect
            x="12"
            y="42"
            width="8"
            height="10"
            fill="none"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="46"
            x2="20"
            y2="46"
            stroke="currentColor"
            strokeLinecap="round"
          />


          <line x1="32" y1="36" x2="32" y2="44" strokeLinecap="round" />
          <path d="M28 24 Q32 22 36 24" fill="none" strokeLinecap="round" />
        </svg>

      ),
      value: "300+",
      label: "Faculty Members",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 text-emerald-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >

          <rect
            x="12"
            y="40"
            width="40"
            height="8"
            rx="2"
            fill="none"
            strokeLinejoin="round"
          />
          <line
            x1="12"
            y1="42"
            x2="52"
            y2="42"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />


          <rect
            x="16"
            y="30"
            width="32"
            height="8"
            rx="2"
            fill="none"
            strokeLinejoin="round"
          />
          <line
            x1="16"
            y1="32"
            x2="48"
            y2="32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />


          <rect
            x="20"
            y="20"
            width="24"
            height="8"
            rx="2"
            fill="none"
            strokeLinejoin="round"
          />
          <line
            x1="20"
            y1="22"
            x2="44"
            y2="22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />


          <path
            d="M42 22 L46 22 L44 26 Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>

      ),
      value: "50+",
      label: "Programs Offered",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-12 h-12 text-emerald-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >

          <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" />


          <path
            d="M12 32 Q32 24 52 32 Q32 40 12 32 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M20 20 Q32 16 44 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M20 44 Q32 48 44 44"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />


          <path
            d="M32 12 Q24 32 32 52 Q40 32 32 12 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M20 32 Q32 24 44 32 Q32 40 20 32 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />


          <path
            d="M36 18 L37 20 L34 20 Z"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="36" cy="18" r="1" fill="white" />


          <path
            d="M28 46 L29 48 L26 48 Z"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="28" cy="46" r="1" fill="white" />


          <path
            d="M44 36 L45 38 L42 38 Z"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="44" cy="36" r="1" fill="white" />


          <path
            d="M20 28 L21 30 L18 30 Z"
            fill="currentColor"
            stroke="none"
          />
          <circle cx="20" cy="28" r="1" fill="white" />
        </svg>

      ),
      value: "120+",
      label: "Countries Represented",
    },
  ];


  return (
    <div className="bg-white rounded-lg  p-4 w-full pt-12 px-4 mx-auto">
      {/* Card Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-emerald-500">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search Section - Matching Featured Courses Style */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black  p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-500">Find Your Perfect Course</h2>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>2024 Admissions Open</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select
                  className="w-full px-4 py-3 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none hover:border-blue-200"
                  value={selectedFaculty}
                  onChange={(e) => setSelectedFaculty(e.target.value)}
                >
                  <option value="">Select Faculty</option>
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <select
                  className="w-full px-4 py-3 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none hover:border-blue-200"
                  value={selectedNationality}
                  onChange={(e) => setSelectedNationality(e.target.value)}
                >
                  <option value="">Select Nationality</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <button className="w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 focus:ring-2 focus:ring-blue-300 outline-none flex items-center justify-center gap-2" onClick={handleSearchCourses} disabled={isLoading}>
                <span>{isLoading ? 'Searching...' : 'Search Courses'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4" />
                50+ Programs
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Multiple Locations
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Flexible Schedule
              </span>
            </div>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <SearchResult courses={courses} />
        )}
      </div>



      {/* Featured Courses Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Featured Courses</h2>
            <button className="text-sm text-blue-500 hover:text-blue-600 flex items-center gap-1 group">
              View All
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCourses?.map((course, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between bg-white animate-fade-in"
                style={{
                  animationDelay: `${index * 150}ms`,
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${index * 150}ms forwards`
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
                    <span className="font-bold text-green-600">
                      {course.tuitionFee}
                    </span>{" "}
                    | {course.type}
                  </p>
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {course.intakes.map((intake, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:shadow-sm ${getIntakeColor(intake)}`}
                      >
                        {intake}
                      </span>
                    ))}
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
            )) || (
                <p className="text-center text-gray-500 text-sm">
                  No featured courses available.
                </p>
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
    </div>
  );
};


export default CourseSearchHero;
