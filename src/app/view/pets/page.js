import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getUser, listPets } from "../../../graphql/queries";

import PetTable from "./PetTable";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

// Define the variables for the query
const filter = {}; // Optional filter
const limit = 10; // Optional limit
let nextToken = null; // Optional nextToken, if paginating

// Run the GraphQL query using Amplify
async function fetchPets() {
  let result;
  const request = await cookieBasedClient.graphql({
    query: listPets,
    variables: {
      filter,
      limit,
      nextToken,
    },
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
  return request.data.getUser?.name ? request.data.getUser?.name : "No owner";
}

export default async function ViewPet() {
  let data = await fetchPets();
  console.log("Data: ", data);

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
