"use client";
import Actions from "../Actions";
export default function PetTable({ pets }) {
  return (
    <table className="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Breed</th>
          <th>Gender</th>
          <th>Owner</th>
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
            <td>{pet.userID}</td>
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
