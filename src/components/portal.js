import React, { useState } from 'react';
import { 
  Compass, Globe, BookOpen, Award, DollarSign, FileText, 
  Calendar, Plane, CheckCircle, MessageCircle, GraduationCap,
  FileCheck, MapPin, Bell, ChevronRight, ChevronDown, 
  ArrowRight, Star, Clock, Users
} from 'lucide-react';
import { Card, CardContent } from "./ui/card";

const JourneyPortal = () => {
  const [activeStage, setActiveStage] = useState('research');
  const [expandedStage, setExpandedStage] = useState('research');
  const [hoveredStage, setHoveredStage] = useState(null);

  const journeyStages = [
    {
      stage: 'research',
      icon: <Compass size={24} />,
      label: 'Explore & Research',
      subLabel: 'Discover your path',
      color: 'blue',
      progress: 75,
      subItems: [
        { icon: <Globe size={20} />, label: 'Study Destinations', badge: 'New', highlight: true },
        { icon: <BookOpen size={20} />, label: 'Browse Courses', completed: true },
        { icon: <Award size={20} />, label: 'Universities', inProgress: true },
        { icon: <DollarSign size={20} />, label: 'Scholarships', upcoming: true }
      ]
    },
    {
      stage: 'prepare',
      icon: <FileText size={24} />,
      label: 'Preparation',
      subLabel: 'Get ready',
      color: 'purple',
      progress: 45,
      subItems: [
        { icon: <FileCheck size={20} />, label: 'Requirements', badge: '2', urgent: true },
        { icon: <Calendar size={20} />, label: 'Test Booking', upcoming: true },
        { icon: <FileText size={20} />, label: 'Documents', inProgress: true }
      ]
    },
    {
      stage: 'apply',
      icon: <Plane size={24} />,
      label: 'Applications',
      subLabel: 'Track progress',
      color: 'green',
      progress: 20,
      subItems: [
        { icon: <FileText size={20} />, label: 'My Applications', badge: '3', highlight: true },
        { icon: <CheckCircle size={20} />, label: 'Status Track', upcoming: true },
        { icon: <MessageCircle size={20} />, label: 'Interviews', upcoming: true }
      ]
    },
    {
      stage: 'accept',
      icon: <GraduationCap size={24} />,
      label: 'Post Acceptance',
      subLabel: 'Next steps',
      color: 'orange',
      progress: 0,
      subItems: [
        { icon: <FileCheck size={20} />, label: 'Visa Process', upcoming: true },
        { icon: <MapPin size={20} />, label: 'Accommodation', upcoming: true },
        { icon: <Plane size={20} />, label: 'Travel Prep', upcoming: true }
      ]
    }
  ];

  const getStageColor = (stage, isHovered) => {
    const colors = {
      research: isHovered ? 'bg-blue-100 text-blue-600' : 'bg-blue-50 text-blue-500',
      prepare: isHovered ? 'bg-purple-100 text-purple-600' : 'bg-purple-50 text-purple-500',
      apply: isHovered ? 'bg-green-100 text-green-600' : 'bg-green-50 text-green-500',
      accept: isHovered ? 'bg-orange-100 text-orange-600' : 'bg-orange-50 text-orange-500'
    };
    return colors[stage];
  };

  const getProgressColor = (stage) => {
    const colors = {
      research: 'bg-blue-500',
      prepare: 'bg-purple-500',
      apply: 'bg-green-500',
      accept: 'bg-orange-500'
    };
    return colors[stage];
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Your Study Abroad Journey
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Follow your path to international education with our step-by-step guide
        </p>
      </div>

      {/* Journey Progress */}
      <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <Clock className="text-blue-500" />
          <div>
            <h3 className="font-medium">Overall Progress</h3>
            <div className="w-64 h-2 bg-gray-100 rounded-full mt-2">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }} />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Tasks Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </div>
        </div>
      </div>

      {/* Journey Stages */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journeyStages.map((stage, index) => (
          <Card 
            key={stage.stage}
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg
              ${activeStage === stage.stage ? 'ring-2 ring-opacity-50 ring-' + stage.color + '-500' : ''}
              transform hover:-translate-y-1`}
            onMouseEnter={() => setHoveredStage(stage.stage)}
            onMouseLeave={() => setHoveredStage(null)}
            onClick={() => {
              setActiveStage(stage.stage);
              setExpandedStage(expandedStage === stage.stage ? null : stage.stage);
            }}
          >
            {/* Progress bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
              <div 
                className={`h-full transition-all duration-500 ${getProgressColor(stage.stage)}`}
                style={{ width: `${stage.progress}%` }}
              />
            </div>

            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg transition-colors duration-300 ${getStageColor(stage.stage, hoveredStage === stage.stage)}`}>
                  {stage.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{stage.label}</h3>
                  <p className="text-sm text-gray-600">{stage.subLabel}</p>
                  <div className="mt-2 text-sm">
                    <span className={`text-${stage.color}-600`}>{stage.progress}% Complete</span>
                  </div>
                </div>
                {expandedStage === stage.stage ? 
                  <ChevronDown className="text-gray-400 transition-transform duration-300" /> : 
                  <ChevronRight className="text-gray-400 transition-transform duration-300" />
                }
              </div>

              {/* Expandable section */}
              <div className={`mt-4 space-y-3 transition-all duration-300 ${
                expandedStage === stage.stage ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
              }`}>
                {stage.subItems.map((item, i) => (
                  <div 
                    key={i}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors
                      ${item.highlight ? 'bg-blue-50 hover:bg-blue-100' : 
                        item.completed ? 'bg-green-50 hover:bg-green-100' :
                        item.urgent ? 'bg-red-50 hover:bg-red-100' :
                        'hover:bg-gray-50'}`}
                  >
                    <div className={`${
                      item.completed ? 'text-green-600' :
                      item.urgent ? 'text-red-600' :
                      item.inProgress ? 'text-blue-600' :
                      'text-gray-600'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.highlight ? 'bg-blue-100 text-blue-600' :
                        item.urgent ? 'bg-red-100 text-red-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {item.badge}
                      </span>
                    )}
                    {item.completed && <CheckCircle className="text-green-500" size={16} />}
                    {item.inProgress && <Clock className="text-blue-500" size={16} />}
                    {item.upcoming && <ArrowRight className="text-gray-400" size={16} />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resource Hub */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Resource Hub</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <Users className="text-blue-500 mb-4" size={28} />
              <h3 className="font-semibold mb-2">Student Community</h3>
              <p className="text-sm text-gray-600">Connect with fellow students and alumni</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <Star className="text-purple-500 mb-4" size={28} />
              <h3 className="font-semibold mb-2">Success Stories</h3>
              <p className="text-sm text-gray-600">Learn from others' experiences</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <BookOpen className="text-green-500 mb-4" size={28} />
              <h3 className="font-semibold mb-2">Study Guides</h3>
              <p className="text-sm text-gray-600">Comprehensive preparation materials</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <MessageCircle className="text-orange-500 mb-4" size={28} />
              <h3 className="font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-gray-600">Get help from our counselors</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JourneyPortal;