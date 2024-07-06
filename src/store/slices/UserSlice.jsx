// Import the createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for user management
const userSlice = createSlice({
  // Name of the slice
  name: "user",
  // Initial state for the slice
  initialState: [],
  // Reducers to define actions and how they update the state
  reducers: {
    // Action to add a user
    addUser(state, action) {
      // Push the new user (action.payload) into the state array
      state.push(action.payload);
    },

    // Action to remove a user
    removeUser(state, action) {
      // Remove the user at the specified index (action.payload) from the state array
      state.splice(action.payload, 1);
    },

    // Action to delete all users
    deleteUser(state, action) {
      // Return an empty array to clear all users
      return [];
    },

    // Action to update a user
    updateUser: (state, action) => {
      // Destructure the id and user from the action payload
      const { id, user } = action.payload;
      // Update the user at the specified index (id) with the new user data
      state[id] = user;
    },
  },
});

// Export the reducer to be used in the store configuration
export default userSlice.reducer;
// Export the actions to be used in the components
export const { addUser, removeUser, deleteUser, updateUser } = userSlice.actions;
