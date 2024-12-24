import onboardingStudentsSlice from "./slices/onboardingStudentsSlice";
import  { configureStore }  from "@reduxjs/toolkit";                      

//create a store and give it slice
export const store = configureStore({
  reducer: {
    onboarding: onboardingStudentsSlice,
  },
});
