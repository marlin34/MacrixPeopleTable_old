import './App.css';
import EndpointPeopleMock from './components/endpointMock';

function PersonRow ({ person }) {
  return  (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.streetName}</td>
      <td>{person.houseNumber}</td>
      <td>{person.apartmentNumber}</td>
      <td>{person.postalCode}</td>
      <td>{person.town}</td>
      <td>{person.phoneNumber}</td>
      <td>{person.dateOfBirth}</td>
      <td>{person.age}</td>
      <td><button>Delete</button></td>      
    </tr>
  );
}

function PeopleTable({ people }) {
  const rows = [];

  people.forEach(person => {
    rows.push(
      <PersonRow 
        person = {person}
        key = {person.Id} />
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
        </tr>
      </thead>
      <tbody> {rows}</tbody>
    </table>
  );
}

function EditablePeopleTable({people}) {
  return (
    <div>
      <PeopleTable people={people} />
      <button
        key='saveBtn' 
        type='button'>Save</button> &nbsp;        
        <button
        key='cancelBtn' 
        type='button'>Cancel</button>
    </div>
  );
}


function App() {
  return <EditablePeopleTable people = {EndpointPeopleMock} />
}

export default App;
