import { useEffect, useState } from "react";
import { UserData } from "../context/User"; // assuming UserContext is set up
import { toast } from "react-toastify";

const Admin = () => {
  const { getAllUsers, updateUser, deleteUser } = UserData();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editModal, setEditModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
        setFilteredUsers(usersData);  // Initially show all users
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };
    fetchUsers();
  }, [getAllUsers]);

  // Handle the search filter
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.role.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // Handle Edit Modal open and close
  const openEditModal = (user) => {
    setCurrentUser(user);
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
    setCurrentUser({});
  };

  // Handle Edit User
  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser(currentUser._id, currentUser);
      toast.success("User updated successfully");
      setUsers(users.map((user) => (user._id === updatedUser._id ? updatedUser : user)));
      closeEditModal();
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  // Handle Delete User
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name, Email, Role"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table to display users */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.role}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => openEditModal(user)}
                      className="px-4 py-2 text-white bg-blue-500 rounded-lg mr-2 hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      {editModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>
            <form onSubmit={handleEditUser}>
              <input
                type="text"
                value={currentUser.name}
                onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Name"
              />
              <input
                type="email"
                value={currentUser.email}
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Email"
              />
              <input
                type="text"
                value={currentUser.role}
                onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                placeholder="Role"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
