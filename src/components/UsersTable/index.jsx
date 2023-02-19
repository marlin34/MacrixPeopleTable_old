import { Fragment } from "react";
import { UserRow } from '../UserRow'
import { UserRowEdit } from "../UserRowEdit";
import { Columns } from "../Columns"


function UsersTable({
  users,
  editedUser,
  editedRowId,
  handleEditAction,
  handleEditInputChange,
  handleDeleteAction,
  handleCancelAction
}) {

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
      <thead><Columns/></thead>
      <tbody>{rows}</tbody>
    </table>
  );

};

export default UsersTable;