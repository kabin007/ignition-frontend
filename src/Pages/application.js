import React, { useState } from "react";
import ApplicationHeader from "../components/myApplicationHeading";
import PersonalDetails from "../components/PersonalDetails";
import AcademicDetails from "../components/academicDetails";
// import CourseSelection from "./CourseSelection";
import DocumentUpload from "../components/uploadDocument";
import { ChevronRight } from "lucide-react";
import StudentPrefences from "../components/StudentPrefences";

const MultiStepForm = () => {
  const totalSteps = 4; // Total steps in the form
  const [currentStep, setCurrentStep] = useState(1); // Current step tracker

  // Function to go to the next step
  const goToNextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  // Function to go to the previous step
  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Function to handle draft save (for now, it just logs the current step)
  const saveAsDraft = () => {
    console.log(`Step ${currentStep} saved as draft.`);
    alert("Progress saved as draft!");
  };

  return (
    <div>
      {/* Dynamic Header */}
      <ApplicationHeader currentStep={currentStep} totalSteps={totalSteps} />

      {/* Render Current Step Component */}
      {currentStep === 1 && (
        <PersonalDetails
          ifFirstStep={true}
          onNext={goToNextStep}
          onPrevious={goToPreviousStep}
          onSaveDraft={saveAsDraft}
          isLastStep={false}
        />
      )}
      {currentStep === 2 && (
        <AcademicDetails
          ifFirstStep={false}
          onNext={goToNextStep}
          onPrevious={goToPreviousStep}
          onSaveDraft={saveAsDraft}
          isLastStep={false}
        />
      )}
      {currentStep === 3 && (
        <StudentPrefences
          ifFirstStep={false}
          onNext={goToNextStep}
          onPrevious={goToPreviousStep}
          onSaveDraft={saveAsDraft}
          isLastStep={false}
        />
      )}
      {currentStep === 4 && (
        <DocumentUpload
          ifFirstStep={false}
          onNext={() => alert("Form submitted!")} // Submit action on last step
          onPrevious={goToPreviousStep}
          onSaveDraft={saveAsDraft}
          isLastStep={true}
        />
      )}
    </div>
  );
};



export default MultiStepForm;
