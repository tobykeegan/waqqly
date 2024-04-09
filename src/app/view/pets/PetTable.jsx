"use client";
import Actions from "../Actions";
export default function PetTable({ pets }) {
  if (pets.length == 0) {
    return (
      <div className="notification is-warning">
        There are currently no dogs in the database. Try{" "}
        <a href="/register/pet">registering a dog</a>.
      </div>
    );
  }
  return (
    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Gender</th>
          <th>Walker</th>
          <th>Info</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.breed}</td>
            <td>{pet.gender}</td>
            <td>{pet.walker}</td>
            <td>{pet.info}</td>
            <td>
              <Actions type="pet" id={pet.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
