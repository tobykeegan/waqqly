"use client";
import Actions from "../Actions";
export default function Walker({ users: walkers }) {
  if (walkers.length == 0) {
    return (
      <div className="notification is-warning">
        There are currently no dog walkers in the database. Try{" "}
        <a href="/register/walker">registering a walker</a>.
      </div>
    );
  }
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
        {walkers.map((user) => (
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
