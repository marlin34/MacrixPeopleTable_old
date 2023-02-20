import React, { useEffect, useState, useMemo } from "react";
import { useTable } from 'react-table';
import { useUsers } from '../../hooks/useUsers';
import { Columns } from '../Columns';
import axios from 'axios';




export function UsersTable() {

  //const { state } = React.useContext(TableContext);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {

    const response = await axios.get(
      "https://specialview.backendless.app/api/data/People")
      .catch((err) => console.log(err));

    if (response && response.data) {
      const users = response.data;
      console.log("Users: ", users);

      setUsers(users);
    }
  };

  const removeByIndexs = (array, indexs) =>
    array.filter((_, i) => !indexs.includes(i));

  const deleteUserHandler = (event) => {
    const newData = removeByIndexs(
      usersData,
      Object.keys(selectedRowIds).map((x) => parseInt(x, 10))
    );
    setUsers(newData);
  };

  
 
  const handleRemoveClick = (rowId) => {
     let newUsers = [...users];
     newUsers = newUsers.filter((item, index) => index !== rowId);
     setUsers(newUsers);
  };

  const handleRemoveClick2 = (rowId) => {
    const newUsers = [...users];
    const index = users.findIndex((user) => user.Id === rowId);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const columns = useMemo(() => Columns, []);

  const usersData = useMemo(() => [...users], [users]);

  const actionsHook = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Actions",
        Header: "Edit",
        Cell: ({ row }) => (
          <button>
            Edit
          </button>
        ),
      },
      {
        id: "Delete",
        Header: "Delete",
        Cell: ({ row }) => (
          <button onClick={() => handleRemoveClick(row.id)}>
            Delete
          </button>
        ),
      },
    ]);
  };

  const table = useTable(
    {
      columns,
      data: usersData,
    },
    actionsHook
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { selectedRowIds }
  } = table;

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div className="ui-block">
      <table style={{ border: 'solid 1px gray' }} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th style={{
                  background: 'lightGreen',
                  color: 'black',
                  fontWeight: 'bold',
                }} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr style={{
                background: 'white',
                color: 'black',
              }} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}