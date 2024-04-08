"use server";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { deletePet, deleteUser } from "../../graphql/mutations";

export default async function doDelete(type, idToDelete) {
  const cookieBasedClient = generateServerClientUsingCookies({
    config: amplifyConfig,
    cookies,
  });

  console.log(`Deleting ${type} with id ${idToDelete}`);

  const mutationInput = {
    id: idToDelete,
  };

  try {
    const request = await cookieBasedClient.graphql({
      query: type === "pet" ? deletePet : deleteUser,
      variables: {
        input: mutationInput,
      },
    });

    console.log("Deleted user", request);
  } catch (err) {
    console.error("Error deleting pet", err);
  }
}
