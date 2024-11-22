import React, { useEffect, useState } from "react";
import { UserData } from "../context/User";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";

const Admin = () => {
  const { getAllUsers, editUser, deleteUser } = UserData();

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  // Fetch all users on page load
  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getAllUsers();
      setUsers(userList);
    };
    fetchUsers();
  }, [getAllUsers]);

  // Handle delete user
  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(userId);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success("User deleted successfully!");
    }
  };

  // Handle edit user (start editing)
  const handleEdit = (user) => {
    setEditUserId(user._id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  // Save the edited user details
  const handleSave = async (userId) => {
    await editUser(userId, editName, editEmail);
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user._id === userId ? { ...user, name: editName, email: editEmail } : user
      )
    );
    setEditUserId(null);
    toast.success("User updated successfully!");
  };

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 text-white">
      <div className="w-full mb-2 items-center flex justify-between">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Link to={"/home"} className="bg-green-500 p-2 rounded-md text-white flex items-center justify-center">Home</Link>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email, or role"
        className="border rounded p-2 mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* User Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user._id} className="text-center">
                <td className="border border-gray-300 p-2">
                  {editUserId === user._id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border text-black rounded p-1 w-full"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {editUserId === user._id ? (
                    <input
                      type="text"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="border text-black rounded p-1 w-full"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="border border-gray-300 p-2">{user.role}</td>
                <td className="border border-gray-300 p-2 space-x-2">
                  {editUserId === user._id ? (
                    <>
                      <button
                        onClick={() => handleSave(user._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditUserId(null)}
                        className="bg-gray-500 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
