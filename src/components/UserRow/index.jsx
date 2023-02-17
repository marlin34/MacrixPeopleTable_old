
export function UserRow(props) {
    const { user } = props;

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
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  }