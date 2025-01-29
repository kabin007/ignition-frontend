import React, { useState } from 'react';
import { 
  Building, BookOpen, ClipboardList, Award, Plane, GraduationCap,
  Users, Clock, AlertCircle, ChevronRight, Bell, Calendar,
  CheckCircle, XCircle, AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';

const DynamicActionCards = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  // Mock user preferences and data
  const userData = {
    preferredCountry: "Canada",
    preferredCourse: "Computer Science",
    applications: [
      {
        university: "University of Toronto",
        status: "pending",
        missingDocuments: ["Official Transcript", "LOR"],
        deadline: "2025-01-15"
      },
      {
        university: "McGill University",
        status: "in-review",
        submissionDate: "2024-12-01",
        deadline: "2024-12-15"
      }
    ],
    scholarships: [
      {
        name: "International Merit Scholarship",
        deadline: "2025-01-30",
        amount: "$20,000"
      }
    ],
    recommendations: [
      {
        university: "University of British Columbia",
        match: 95,
        deadline: "2025-02-15",
        program: "MSc Computer Science"
      },
      {
        university: "University of Waterloo",
        match: 88,
        deadline: "2025-02-01",
        program: "MEng Software Engineering"
      }
    ]
  };

  // Navigation tiles configuration
  const navigationTiles = [
    { 
      icon: Building, 
      label: "Explore Universities",
      color: "bg-blue-500",
      description: "Browse top universities worldwide"
    },
    { 
      icon: BookOpen, 
      label: "Find Courses",
      color: "bg-green-500",
      description: "Search programs by field and country"
    },
    { 
      icon: ClipboardList, 
      label: "Track Applications",
      color: "bg-purple-500",
      description: "Monitor your application progress"
    },
    { 
      icon: Award, 
      label: "Scholarships & Aid",
      color: "bg-yellow-500",
      description: "Find financial support opportunities"
    },
    { 
      icon: Plane, 
      label: "Visa Assistance",
      color: "bg-red-500",
      description: "Get help with visa applications"
    },
    { 
      icon: GraduationCap, 
      label: "Test Prep",
      color: "bg-indigo-500",
      description: "Prepare for IELTS, GRE, GMAT"
    },
    { 
      icon: Users, 
      label: "Community",
      color: "bg-pink-500",
      description: "Connect with fellow students"
    }
  ];

  // Status indicator component
  const StatusIndicator = ({ status }) => {
    const statusConfig = {
      pending: { icon: AlertCircle, color: "text-yellow-500" },
      'in-review': { icon: Clock, color: "text-blue-500" },
      complete: { icon: CheckCircle, color: "text-green-500" }
    };
    const StatusIcon = statusConfig[status].icon;
    
    return (
      <div className={`flex items-center ${statusConfig[status].color}`}>
        <StatusIcon className="h-4 w-4 mr-2" />
        <span className="capitalize">{status.replace('-', ' ')}</span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      {/* Smart Recommendations Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Building className="h-5 w-5 mr-2 text-blue-500" />
              Top Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {userData.recommendations.map((rec, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{rec.university}</h3>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
                    {rec.match}% Match
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{rec.program}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  Deadline: {new Date(rec.deadline).toLocaleDateString()}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Application Status Cards */}
        <Card className="border-t-4 border-t-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <ClipboardList className="h-5 w-5 mr-2 text-purple-500" />
              Application Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {userData.applications.map((app, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{app.university}</h3>
                  <StatusIndicator status={app.status} />
                </div>
                {app.status === 'pending' && app.missingDocuments && (
                  <Alert className="mt-2 bg-yellow-50 border-yellow-200">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <AlertDescription className="text-sm ml-2">
                      Missing: {app.missingDocuments.join(', ')}
                    </AlertDescription>
                  </Alert>
                )}
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  Deadline: {new Date(app.deadline).toLocaleDateString()}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Deadlines */}
      <Card className="border-t-4 border-t-red-500">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Bell className="h-5 w-5 mr-2 text-red-500" />
            Upcoming Deadlines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userData.scholarships.map((scholarship, i) => (
              <Alert key={i} className="bg-red-50 border-red-200">
                <AlertTitle className="font-medium">
                  {scholarship.name} ({scholarship.amount})
                </AlertTitle>
                <AlertDescription className="flex items-center mt-1 text-sm">
                  <Clock className="h-4 w-4 mr-1 text-red-500" />
                  Due by {new Date(scholarship.deadline).toLocaleDateString()}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* One-Tap Navigation Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {navigationTiles.map((tile, i) => (
          <button
            key={i}
            onClick={() => setSelectedTile(tile.label)}
            className="group relative overflow-hidden rounded-xl transition-all duration-300 
                     hover:shadow-lg hover:scale-105"
          >
            <div className={`${tile.color} p-6 h-full w-full`}>
              <div className="relative z-10">
                <tile.icon className="h-8 w-8 text-white mb-3" />
                <h3 className="text-lg font-medium text-white mb-1">
                  {tile.label}
                </h3>
                <p className="text-sm text-white/80 hidden group-hover:block transition-all">
                  {tile.description}
                </p>
              </div>
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full 
                            transform translate-x-16 -translate-y-16" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicActionCards;