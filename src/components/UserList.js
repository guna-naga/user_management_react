function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="list">
      {users.map((user) => (
        <div className="list-item" key={user.id}>
          <div>
            <strong>
              {user.firstName} {user.lastName}
            </strong>
            <div>{user.email}</div>
          </div>
          <div>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button
              className="danger"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
