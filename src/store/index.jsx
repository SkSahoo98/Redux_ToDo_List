// Import the configureStore function from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the user slice reducer
import userSlice from "./slices/UserSlice";

// Configure the Redux store
const store = configureStore({
  // Combine reducers into a single reducer object
  reducer: {
    // Assign the user slice reducer to handle the 'users' state
    users: userSlice,
  },
});

// Export the configured store for use in the application
export default store;
