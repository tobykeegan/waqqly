import { NextResponse } from "next/server";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getUser } from "@/graphql/queries";
import { deleteUser } from "@/graphql/mutations";

const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

/**
 *  GET a user from DynamoDB, using the user's ID
 */
export async function GET(request, { params }) {
  const user = await cookieBasedClient.graphql({
    query: getUser,
    variables: {
      id: params.id,
    },
  });

  return new Response(JSON.stringify(user.data.getUser), {
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
    query: deleteUser,
    variables: {
      input: {
        id: params.id,
      },
    },
  });

  return new Response(JSON.stringify(user.data.deleteUser), {
    headers: {
      "content-type": "application/json",
    },
  });
}
