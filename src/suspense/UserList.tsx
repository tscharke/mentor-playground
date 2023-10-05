type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
};

const User = ({ user: { name, username, email } }: { user: IUser }) => (
  <ul
    style={{
      listStyleType: 'none',
      marginTop: 0,
      marginLeft: 10,
      marginBottom: 0,
      padding: 0
    }}
  >
    <li>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Mail: {email}</div>
    </li>
  </ul>
);

type UserListProperties = {
  users: ReadonlyArray<IUser>;
};

export const UserList = ({ users }: UserListProperties): JSX.Element => {
  return (
    <>
      {users.map((user) => {
        return <User key={`User-${user.id}`} user={user} />;
      })}
    </>
  );
};
