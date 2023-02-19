import React from "react";

export function UserRow({user, handleEditAction, handleDeleteAction }) {
    
    return (
      <tr>
        <td>{user.FirstName}</td>
        <td>{user.LastName}</td>
        <td>{user.StreetName}</td>
        <td>{user.HouseNumber}</td>
        <td>{user.ApartmentNumber}</td>
        <td>{user.PostalCode}</td>
        <td>{user.Town}</td>
        <td>{user.PhoneNumber}</td>
        <td>{user.DateOfBirth}</td>
        <td>{user.Age}</td>
        <td>
          <button
            type="button"
            onClick={(e) => handleEditAction(e, user)}
            >
              Edit</button>
          <button
            type="button"
            onClick={() => handleDeleteAction(user.id)}
          >
            Delete</button>
        </td>
      </tr>
    );
  }