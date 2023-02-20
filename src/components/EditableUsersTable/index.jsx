import { useState} from 'react';
import { useUsers } from '../../hooks/useUsers';
import UsersTable from '../UsersTable';


function EditableUsersTable() {

  const [users, setUsers] = useState([]);

  // useUsers custom hook do zaciągnięcia userów z API
  const { fetchedUsers } = useUsers();
  setUsers(fetchedUsers);

  //const hasUsers = () => fetchedUsers.length > 0

  // state do edycji danego wiersza 
  const [editedUserId, setEditedUserId] = useState(null);

  const [editedUser, setEditedUser] = useState({
    FirstName: "",
    LastName: "",
    StreetName: "",
    HouseNumber: "",
    ApartmentNumber: "",
    PostalCode: "",
    Town: "",
    PhoneNumber: "",
    DateOfBirth: "",
    Age: "",
  });



  //na potem do add userForm
  // const [addUser, setAddUser] = useState({
  //   FirstName: "",
  //   LastName: "",
  //   StreetName: "",
  //   HouseNumber: "",
  //   ApartmentNumber: "",
  //   PostalCode: "",
  //   Town: "",
  //   PhoneNumber: "",
  //   DateOfBirth: "",
  //   Age: "",
  // });



  // metody i handlery 

  const handleCancelAction = () => {
    setEditedUserId(null);
  };

  const handleEditAction = (e, user) => {
    e.preventDefault();
    setEditedUserId(user.id);

    const rowValues = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      StreetName: user.StreetName,
      HouseNumber: user.HouseNumber,
      ApartmentNumber: user.ApartmentNumber,
      PostalCode: user.PostalCode,
      Town: user.Town,
      PhoneNumber: user.PhoneNumber,
      DateOfBirth: user.DateOfBirth,
      Age: user.Age,
    };

    setEditedUser(rowValues);
  };
  // !!!!!!!!!!
  // for age there should be func to calculate the age based on Date.Now - DateOfBirth 

  // const calculateAge = (user.DateOfBirth) => {

  // }

  const handleDeleteAction = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const handleEditInputChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newUserData = { ...editedUser };
    newUserData[fieldName] = fieldValue;

    setEditedUser(newUserData);
  };

  //2. <AddUserForm /> -> handleAddUser, handleAddFormChange onSubmit={handleAddFormSubmit}
  //3. dodanie akcji na buttony Save/Cancel - push na API i restore stanu z API 
  //{!hasUsers(
  //  <em>Please add some users to the table.</em>
  // )}

  return (
    <div className="container mx-auto">
      <h2>Manage Users</h2>      

      <div className="flex justify-center mt-8">

        <UsersTable
          users={users}
          editedUser={editedUser}
          editedRowId={editedUserId}
          handleEditAction={handleEditAction}
          handleDeleteAction={handleDeleteAction}
          handleEditInputChange={handleEditInputChange}
          handleCancelAction={handleCancelAction}>
        </UsersTable>
      </div>

      <button
        key='saveBtn'
        type='button'>Save</button> &nbsp;
      <button
        key='cancelBtn'
        type='button'>Cancel</button>


    </div>
  );
}
export default EditableUsersTable;