import './Users.css';

const Users = ({ activeUsers }) => {
  return (
    <div className="usersContainer">
      <header className="activeUsersHeader">Active Users</header>
      {activeUsers && (
        <ul>
          {activeUsers.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Users;
