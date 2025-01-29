import React from "react";
import { ChevronRight, Calendar, MapPin } from "lucide-react";

const ScholarshipSection = () => {
  // Scholarship Data
  const scholarships = [
    {
      name: "Tech Leaders Scholarship",
      amount: "$30,000",
      deadline: "2025-01-30",
      eligibility: "Perfect match",
      city: "Palo Alto, California",
      university: "Stanford University",
      description:
        "Awarded to tech leaders demonstrating innovation and academic excellence.",
      url: "/scholarship/tech-leaders",
    },
    {
      name: "International Merit Award",
      amount: "$25,000",
      deadline: "2025-02-15",
      eligibility: "High match",
      city: "Cambridge, Massachusetts",
      university: "MIT",
      description:
        "Supports international students with exceptional merit and leadership potential.",
      url: "/scholarship/international-merit",
    },
    {
      name: "Balmiki Lincoln College",
      amount: "NPR 11,000",
      deadline: "2025-03-15",
      eligibility: "High match",
      city: "Amsterdam of Birtamode",
      university: "Lincoln University",
      description:
        "Supports international students with exceptional merit and leadership potential.",
      url: "/scholarship/balmiki-lincoln",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Scholarships</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl shadow-md bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Scholarship Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {scholarship.name}
                </h3>

                {/* Scholarship Amount */}
                <p className="text-lg text-green-600 font-bold mb-4">
                  {scholarship.amount}
                </p>

                {/* University and City */}
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">University:</span>{" "}
                  {scholarship.university}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  {scholarship.city}
                </p>

                {/* Deadline */}
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Calendar className="w-4 h-4 mr-2 text-red-500" />
                  <span className="font-semibold">Deadline:</span>{" "}
                  {new Date(scholarship.deadline).toLocaleDateString()}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-4">
                  {scholarship.description}
                </p>
              </div>

              {/* Learn More Button */}
              <a
                href={scholarship.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-all flex items-center justify-center gap-2"
              >
                <ChevronRight className="w-4 h-4" />
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSection;
