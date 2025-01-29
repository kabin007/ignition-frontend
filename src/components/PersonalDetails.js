import React, { useState } from "react";
import {
  Upload,
  Mail,
  Phone,
  MapPin,
  User,
  Calendar,
  ChevronRight,
  Flag,
  CreditCard,
  Home,
} from "lucide-react";

const PersonalDetails = ({
  onNext,
  onPrevious,
  onSaveDraft,
  isLastStep,
  isFirstStep = false
}) => {
  
  const [formData, setFormData] = useState({
    basicInfo: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      nationality: "",
      passportNumber: "",
    },
    contactInfo: {
      email: "",
      phone: "",
      alternatePhone: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });
  const checklistItems = [
    { label: "Profile Uploaded", status: true },
    { label: "Basic Info", status: true },
    { label: "Contact Info", status: false },
    { label: "Address Info", status: true },
  ];

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const calculateProgress = () => {
    const totalFields = Object.values(formData).reduce(
      (acc, section) => acc + Object.keys(section).length,
      0
    );
    // ...
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-9">
      {/* Header */}
      {/* <header className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Personal Details
              </h1>
              <p className="text-gray-600 mt-1">Step 1 of 3: Basic Information</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-600 border border-gray-200">
                Application ID: <span className="font-medium">SA-2024-1234</span>
              </div>
              <button className="px-4 py-2 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300">
                Save & Exit
              </button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Progress Bar */}
      {/* <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-gray-700">Form Progress</h2>
          <span className="bg-blue-50 px-3 py-1 text-sm text-gray-600 rounded-lg border border-gray-200">
            {calculateProgress()}% Complete
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      </div> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Guidelines */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 border border-gray-200 rounded-lg">
              <div className="mb-6">
                <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                  <div className="flex items-center justify-center px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    <span className="text-sm">Upload Photo</span>
                  </div>
                </label>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Guidelines
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md">
                  <User className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>
                    Provide your legal name as it appears on your passport
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>Use an email address you check regularly</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded-md">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>Include country code with phone numbers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Basic Info Section */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Basic Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.basicInfo.firstName}
                      onChange={(e) =>
                        handleInputChange(
                          "basicInfo",
                          "firstName",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.basicInfo.lastName}
                      onChange={(e) =>
                        handleInputChange(
                          "basicInfo",
                          "lastName",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.basicInfo.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange(
                          "basicInfo",
                          "dateOfBirth",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.basicInfo.gender}
                      onChange={(e) =>
                        handleInputChange("basicInfo", "gender", e.target.value)
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Country of Residence
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.basicInfo.nationality}
                      onChange={(e) =>
                        handleInputChange(
                          "basicInfo",
                          "nationality",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passport Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.basicInfo.passportNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "basicInfo",
                          "passportNumber",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.contactInfo.email}
                      onChange={(e) =>
                        handleInputChange(
                          "contactInfo",
                          "email",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.contactInfo.phone}
                      onChange={(e) =>
                        handleInputChange(
                          "contactInfo",
                          "phone",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Alternate Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.contactInfo.alternatePhone}
                      onChange={(e) =>
                        handleInputChange(
                          "contactInfo",
                          "alternatePhone",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="p-6">
                {/* Address Section Continued */}
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Address Information
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.address.street}
                      onChange={(e) =>
                        handleInputChange("address", "street", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.address.city}
                      onChange={(e) =>
                        handleInputChange("address", "city", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.address.state}
                      onChange={(e) =>
                        handleInputChange("address", "state", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.address.postalCode}
                      onChange={(e) =>
                        handleInputChange(
                          "address",
                          "postalCode",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.address.country}
                      onChange={(e) =>
                        handleInputChange("address", "country", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
            </div>
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
                    isLastStep
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
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

export default PersonalDetails;
