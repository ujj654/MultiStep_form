import { setCurrentStep } from "@/redux/slices/onboardingStudentsSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NavButtons() {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const dispatch = useDispatch();

  function handlePrevious() {
    dispatch(setCurrentStep(currentStep - 1));
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
      {currentStep > 1 && (
        <button
          onClick={handlePrevious}
          type="button"
          className="inline-flex items-center px-10 md:px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
      )}
      <button
        type="submit"
        className="inline-flex items-center px-2 md:px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <span>
          {currentStep === 6 ? "Confirm and Submit" : "Save and Continue"}
        </span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}
