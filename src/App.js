import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const loadUsers = async () => {

      setLoading(true);
      const response = await axios.get(
        "https://specialview.backendless.app/api/data/People");

      // After fetching data stored it in users state.
      setUsers(response.data);
      setLoading(false);
    }
    // Call the function
    loadUsers();
  }, []);

  return <EditablePeopleTable people={users} />

}

function PersonRow({ person }) {
  return (
    <tr>
      <td>{person.FirstName}</td>
      <td>{person.LastName}</td>
      <td>{person.StreetName}</td>
      <td>{person.HouseNumber}</td>
      <td>{person.ApartmentNumber}</td>
      <td>{person.PostalCode}</td>
      <td>{person.Town}</td>
      <td>{person.PhoneNumber}</td>
      <td>{person.DateOfBirth}</td>
      <td>{person.Age}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
}

function PeopleTable({ people }) {
  const rows = [];

  people.map((row) => {
    rows.push(
      <PersonRow key={row.Id} person={row} />
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

function EditablePeopleTable({ people }) {
  return (
    <div className="container mx-auto">
      <button
        // onClick={onAddRowClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add User
      </button>
      <div className="flex justify-center mt-8">
        <PeopleTable people={people} />
        <button
          key='saveBtn'
          type='button'>Save</button> &nbsp;
        <button
          key='cancelBtn'
          type='button'>Cancel</button>
      </div>
    </div>
  );
}

export default App;
