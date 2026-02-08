import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./api/userApi";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (data) => {
    if (selectedUser) {
      await updateUser(selectedUser.id, data);
    } else {
      await createUser(data);
    }

    setSelectedUser(null);
    loadUsers();
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      <UserForm
        onSubmit={handleSubmit}
        selectedUser={selectedUser}
      />

      <UserList
        users={users}
        onEdit={setSelectedUser}
        onDelete={async (id) => {
          await deleteUser(id);
          loadUsers();
        }}
      />
    </div>
  );
}

export default App;
