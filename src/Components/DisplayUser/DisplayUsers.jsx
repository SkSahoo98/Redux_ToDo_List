// Import necessary dependencies
import React from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../../store/slices/UserSlice";

// DisplayUsers component
const DisplayUsers = ({ handleEdit }) => {
  // Initialize dispatch from Redux
  let dispatch = useDispatch();

  // Get user data from the Redux store
  let data = useSelector((state) => {
    return state.users;
  });

  // Function to delete a task
  let deleteTask = (id) => {
    dispatch(removeUser(id));
  };

  // Render the list of users
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <div className="actionBtn">
              {/* Button to edit a task */}
              <button onClick={() => handleEdit(id, user)}>
                <MdModeEdit className="edit-icon" />
              </button>
              {/* Button to delete a task */}
              <button className="btn-delete">
                <MdDeleteForever
                  className="delete-icon"
                  onClick={() => deleteTask(id)}
                />
              </button>
            </div>
          </li>
        );
      })}
    </Wrapper>
  );
};

// Styled-components for styling
const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  button {
    border: none;
    background: transparent;
  }

  .actionBtn {
    width: 6rem;
    display: flex;
    justify-content: space-between;
  }

  .edit-icon {
    font-size: 2.6rem;
    color: orange;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
    outline: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
`;

export default DisplayUsers;
