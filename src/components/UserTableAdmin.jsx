import { getMembers, deleteMember } from '../api.js'
import { useEffect, useState } from 'react'
import CreateUser from './CreateUser'

function UserTableAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await getMembers();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  async function handleDelete(id) {
    try {
      await deleteMember(id);

      setUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== id)
    );
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  }

  return (
    <div>
        <CreateUser />

        <table className="user-table border border-black-300">
            <thead className="border border-black-300 bg-gray-400">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody className="bg-gray-100">
                {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.position}</td>
                    <td className="text-red-700 cursor-pointer hover:bg-red-700 hover:text-white" onClick={() => handleDelete(user.id)}>Delete</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default UserTableAdmin;
