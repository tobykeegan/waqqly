import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getPet } from "@/graphql/queries";
import { deletePet } from "@/graphql/mutations";

const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

/**
 *  GET a user from DynamoDB, using the user's ID
 */
export async function GET(request, { params }) {
  const user = await cookieBasedClient.graphql({
    query: getPet,
    variables: {
      id: params.id,
    },
  });

  return new Response(JSON.stringify(user.data.getPet), {
    headers: {
      "content-type": "application/json",
    },
  });
}

/**
 * DELETE a user from DynamoDB, using the user's ID
 */
export async function DELETE(request, { params }) {
  const user = await cookieBasedClient.graphql({
    query: deletePet,
    variables: {
      input: {
        id: params.id,
      },
    },
  });

  return new Response(JSON.stringify(user.data.deletePet), {
    headers: {
      "content-type": "application/json",
    },
  });
}
