"use client";
import Actions from "../Actions";
export default function UserTable({ users }) {
  return (
    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>
              <Actions type="user" id={user.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
