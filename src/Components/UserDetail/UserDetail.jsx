// Import necessary dependencies
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../store/slices/UserSlice";
import DisplayUsers from "../DisplayUser/DisplayUsers";
import DeleteAllUsers from "../DeleteUser/DeleteAllUsers";

// UserDetail component
const UserDetail = () => {
  // State for managing input data and the ID of the task being edited
  const [data, setData] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Function to handle input change and set data state
  const getData = (e) => {
    setData(e.target.value);
  };

  // Initialize dispatch from Redux
  const dispatch = useDispatch();

  // Function to add or update a task
  const addNew = (payload) => {
    if (editingId !== null) {
      
      // If editingId is not null, update the existing task
      dispatch(updateUser({ id: editingId, user: payload }));
      setEditingId(null); // Reset editingId after updating
    } else {
      // If editingId is null, add a new task
      dispatch(addUser(payload));
    }
    setData(""); // Clear the input field
  };

  // Function to handle editing a task
  const handleEdit = (id, user) => {
    setData(user); // Set the input field with the task to be edited
    setEditingId(id); // Set the editingId to the task's ID
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          {/* Input field to enter task */}
          <input
            type="text"
            className="input"
            value={data}
            onChange={getData}
          />
          {/* Button to add or update a task */}
          <button className="btn add-btn" onClick={() => addNew(data)}>
            {editingId !== null ? "Update Task" : "Add New Task"}
          </button>
        </div>

        <div className="admin-table">
          <div className="admin-subtitle">List of Tasks Todo</div>
        </div>

        {/* List of tasks */}
        <ul>
          <DisplayUsers handleEdit={handleEdit} />
        </ul>
        <hr />
        {/* Button to delete all tasks */}
        <DeleteAllUsers />
      </div>
    </Wrapper>
  );
};

// Styled-components for styling
const Wrapper = styled.section`
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  input {
    max-height: 40px;
    max-width: 80rem;
    padding: 10px;
    outline: none;
    font-size: 2rem;
    border-radius: 5px;
    border: 0.5px solid rgba(128, 128, 128, 0.493);
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.308);
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetail;
