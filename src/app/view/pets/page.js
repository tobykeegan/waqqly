import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getUser, listPets } from "../../../graphql/queries";
import { deletePet } from "../../../graphql/mutations";
import PetTable from "./PetTable";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

async function fetchPets() {
  const request = await cookieBasedClient.graphql({
    query: listPets,
  });

  return request.data.listPets.items;
}

async function getUserName(id) {
  const request = await cookieBasedClient.graphql({
    query: getUser,
    variables: {
      id,
    },
  });

  return request.data.getUser.name;
}

export default async function ViewPet() {
  let data = await fetchPets();

  // Get the user name for each pet
  let formatted = await Promise.all(
    data.map(async (pet) => {
      const name = await getUserName(pet.userID);
      return {
        ...pet,
        userID: name,
      };
    })
  );

  return (
    <section className="section">
      <PetTable pets={formatted} />
    </section>
  );
}
