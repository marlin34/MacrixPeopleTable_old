import { Fragment } from "react";
import { UserRow } from '../UserRow'
import { UserRowEdit } from "../UserRowEdit";


function UsersTable({
  users,
  editedUser,
  editedRowId,
  handleEditAction,
  handleEditInputChange,
  handleDeleteAction,
  handleCancelAction
}) {

  const columns = () => {
    return (
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Street Name</th>
        <th>House Number</th>
        <th>Apartment Number</th>
        <th>Postal Code</th>
        <th>Town</th>
        <th>Phone Number</th>
        <th>Date of Birth</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    )

  }
  const rows = users.map((user) => {
    <Fragment>
      {editedRowId === user.id ? (
        <UserRowEdit
          key={user.Id}
          editedUser={editedUser}
          handleEditInputChange={handleEditInputChange}
          handleCancelAction={handleCancelAction}
        />
      ) : (
        <UserRow
          key={user.Id}
          user={user}
          handleEditAction={handleEditAction}
          handleDeleteAction={handleDeleteAction}
        />
      )}
    </Fragment>
  });

  return (
    <table>
      <thead>{columns}</thead>
      <tbody>{rows}</tbody>
    </table>
  );

};

export default UsersTable;