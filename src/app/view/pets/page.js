import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getUser, listPets } from "../../../graphql/queries";
import DataWarning from "../DataWarning";
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
  console.log("Getting user name for id", id);
  if (!id) return "No walker";
  const request = await cookieBasedClient.graphql({
    query: getUser,
    variables: {
      id,
    },
  });
  return request.data.getUser.name;
}

export default async function ViewPet() {
  const _cookies = cookies();
  let data = await fetchPets();

  // Get the user name for each pet
  let formatted = await Promise.all(
    data.map(async (pet) => {
      const walker = await getUserName(pet.userID);
      const result = {
        ...pet,
        walker: walker,
      };
      console.log(result);
      return result;
    })
  );

  return (
    <section className="section">
      <div className="level">
        <h1 className="is-size-3 level-left">View all dogs</h1>
        <a className="button is-primary level-right" href="/register/pet">
          Add a new dog
        </a>
      </div>

      <DataWarning />
      <PetTable pets={formatted} />
    </section>
  );
}
