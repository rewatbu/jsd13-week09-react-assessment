import { getMembers } from '../api.js'
import { useEffect, useState } from 'react'

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getMembers();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <table className="user-table border border-black-300">
      <thead className="border border-black-300 bg-gray-400">
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>

      <tbody className="bg-gray-100">
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
