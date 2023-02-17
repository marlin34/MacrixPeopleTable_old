import './App.css';
import React, { useState, useEffect } from 'react'
import { useUsers } from './hooks/useUsers';
import { UserRow } from "./components/UserRow";

function App() {  
  const { users } = useUsers();
  
  return <EditablePeopleTable people={users} />
}

function PeopleTable({ people }) {
  const rows = [];

  people.map((row) => {
    rows.push(
      <UserRow key={row.Id} user={row} />
    );
  });

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>{rows}</tbody>
      
    </table>
  );
}



// const handleAddFormSubmit = (event) => {
//   event.preventDefault();

//   const newContact = {
//     id: nanoid(),
//     fullName: addFormData.fullName,
//     address: addFormData.address,
//     phoneNumber: addFormData.phoneNumber,
//     email: addFormData.email,
//   };

//   const newContacts = [...contacts, newContact];
//   setContacts(newContacts);
// };

//onSubmit={handleAddFormSubmit}

function EditablePeopleTable({ people }) {
  
  const [addFormData, setAddFormData] = useState({
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

  const [editFormData, setEditFormData] = useState({
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

  const handleAddFormChange = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;
  
    setEditFormData(newFormData);
  }
  
  const handleEditFormChange = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
  
    setEditFormData(newFormData);
  };


  return (
    <div className="container mx-auto">
      <h2>Manage Users</h2>
      
      <div className="flex justify-center mt-8">
        <PeopleTable people={people} />
        
      </div>
      <form>
        <input
          type="text"
          name="FirstName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="LastName"
          required="required"
          placeholder="Enter a surname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="StreetName"
          required="required"
          placeholder="Enter a street..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="HouseNumber"
          required="required"
          placeholder="Enter a house number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="ApartmentNumber"
          required="required"
          placeholder="Enter a apartment number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="PostalCode"
          required="required"
          placeholder="Enter a postal code..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Town"
          required="required"
          placeholder="Enter a town..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="PhoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="DateOfBirth"
          required="required"
          placeholder="xxxx-xx-xx"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      <button
          key='saveBtn'
          type='button'>Save</button> &nbsp;
        <button
          key='cancelBtn'
          type='button'>Cancel</button>
    </div>
  );
}

export default App;
