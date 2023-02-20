import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import { UsersTable } from '../UsersTable';


export const initialState = {
  data: useUsers,
  editing: null
};

const actions = {
  ADD_ROW: "ADD_ROW",
  EDIT_ROW: "EDIT_ROW",
  SAVE_EDIT: "SAVE_EDIT",
  CANCEL_EDIT: "CANCEL_EDIT",
  DELETE_ROW: "DELETE_ROW",
  CANCEL: "CANCEL",
  SAVE: "SAVE",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.ADD_ROW:
      return { ...state, rating: action.value };
    case actions.EDIT_ROW:
      return { ...state, price: action.value };
    case actions.SAVE_EDIT:
      return { ...state, rating: action.value };
    case actions.CANCEL_EDIT:
      return { ...state, price: action.value };
    case actions.DELETE_ROW:
      return { ...state, rating: action.value };
    case actions.SAVE:
      return { ...state, price: action.value };
    case actions.CANCEL:
      return { ...state, ...initialState };
    default:
      return state;
  }
}

export const TableContext = React.createContext();

function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    data: state.data,
    editing: state.editing
  };

  return ( <TableContext.Provider value={value}>
    {children}
  </TableContext.Provider>
  );
}

export default function InlineEditableUsersTable() {
  return (
    <Provider>
      <h2>Manage users </h2>
      <UsersTable/>   
      <h2> Send it to the server! </h2>
      <button>Save</button>
      <button>Cancel</button>        
    </Provider>
  );
}


// function InlineEditableUsersTable2() {

//   const [users, setUsers] = useState([]);

//   // useUsers custom hook do zaciągnięcia userów z API
//   const { fetchedUsers } = useUsers();
//   setUsers(fetchedUsers);

//   //const hasUsers = () => fetchedUsers.length > 0

//   // state do edycji danego wiersza 
//   const [editedUserId, setEditedUserId] = useState(null);

//   const [editedUser, setEditedUser] = useState({
//     FirstName: "",
//     LastName: "",
//     StreetName: "",
//     HouseNumber: "",
//     ApartmentNumber: "",
//     PostalCode: "",
//     Town: "",
//     PhoneNumber: "",
//     DateOfBirth: "",
//     Age: "",
//   });



//   //na potem do add userForm
//   // const [addUser, setAddUser] = useState({
//   //   FirstName: "",
//   //   LastName: "",
//   //   StreetName: "",
//   //   HouseNumber: "",
//   //   ApartmentNumber: "",
//   //   PostalCode: "",
//   //   Town: "",
//   //   PhoneNumber: "",
//   //   DateOfBirth: "",
//   //   Age: "",
//   // });



//   // metody i handlery 

//   const handleCancelAction = () => {
//     setEditedUserId(null);
//   };

//   const handleEditAction = (e, user) => {
//     e.preventDefault();
//     setEditedUserId(user.id);

//     const rowValues = {
//       FirstName: user.FirstName,
//       LastName: user.LastName,
//       StreetName: user.StreetName,
//       HouseNumber: user.HouseNumber,
//       ApartmentNumber: user.ApartmentNumber,
//       PostalCode: user.PostalCode,
//       Town: user.Town,
//       PhoneNumber: user.PhoneNumber,
//       DateOfBirth: user.DateOfBirth,
//       Age: user.Age,
//     };

//     setEditedUser(rowValues);
//   };
//   // !!!!!!!!!!
//   // for age there should be func to calculate the age based on Date.Now - DateOfBirth 

//   // const calculateAge = (user.DateOfBirth) => {

//   // }

//   const handleDeleteAction = (userId) => {
//     const newUsers = [...users];

//     const index = users.findIndex((user) => user.id === userId);
//     newUsers.splice(index, 1);
//     setUsers(newUsers);
//   };

//   const handleEditInputChange = (e) => {
//     e.preventDefault();

//     const fieldName = e.target.getAttribute("name");
//     const fieldValue = e.target.value;

//     const newUserData = { ...editedUser };
//     newUserData[fieldName] = fieldValue;

//     setEditedUser(newUserData);
//   };

//   //2. <AddUserForm /> -> handleAddUser, handleAddFormChange onSubmit={handleAddFormSubmit}
//   //3. dodanie akcji na buttony Save/Cancel - push na API i restore stanu z API 
//   //{!hasUsers(
//   //  <em>Please add some users to the table.</em>
//   // )}

//   return (
//     <div className="container mx-auto">
//       <h2>Manage Users</h2>

//       <div className="flex justify-center mt-8">

//         <UsersTable
//           users={users}
//           editedUser={editedUser}
//           editedRowId={editedUserId}
//           handleEditAction={handleEditAction}
//           handleDeleteAction={handleDeleteAction}
//           handleEditInputChange={handleEditInputChange}
//           handleCancelAction={handleCancelAction}>
//         </UsersTable>
//       </div>

//       <button
//         key='saveBtn'
//         type='button'>Save</button> &nbsp;
//       <button
//         key='cancelBtn'
//         type='button'>Cancel</button>


//     </div>
//   );
// }