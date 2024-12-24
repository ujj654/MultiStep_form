"use client";

import { useSelector } from "react-redux";
import EducationBackgroundForm from "./StepForms/EducationBackgroundForm";
import FormConfirmation from "./StepForms/FormConfirmation";
import PersonalInfoForm from "./StepForms/PersonalInfoForm";
import ProgrammingExperienceForm from "./StepForms/ProgrammingExperienceForm";

export default function StepForm() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <PersonalInfoForm />;
    } else if (step === 2) {
      return <EducationBackgroundForm />;
    } else if (step === 3) {
      return <ProgrammingExperienceForm />;
    } 
     
    else if (step === 4) {
      return <FormConfirmation />;
    }
  }
  return <>{renderFormByStep(currentStep)}</>;
}