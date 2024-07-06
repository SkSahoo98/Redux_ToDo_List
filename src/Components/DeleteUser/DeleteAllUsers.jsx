// Import necessary dependencies
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUser } from "../../store/slices/UserSlice";

// DeleteAllUsers component
const DeleteAllUsers = () => {
  // Initialize dispatch from Redux
  let dispatch = useDispatch();

  // Function to delete all tasks
  const deleteTask = () => {
    dispatch(deleteUser());
  };

  return (
    <>
      <Wrapper>
        {/* Button to clear all tasks */}
        <button className="btn clear-btn" onClick={deleteTask}>
          Clear All Tasks
        </button>
      </Wrapper>
    </>
  );
};

// Styled-components for styling
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUsers;
