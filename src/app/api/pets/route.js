import { NextResponse } from "next/server";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { listPets } from "@/graphql/queries";
import { createPet, updatePet } from "@/graphql/mutations";
const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

/**
 * GET all users from DynamoDB
 */
export async function GET() {
  const request = await cookieBasedClient.graphql({
    query: listPets,
  });

  return new Response(JSON.stringify(request.data.listPets.items), {
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function POST(request) {
  let userData;
  try {
    userData = await request.json();
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Invalid request body" }),
      {
        headers: {
          "content-type": "application/json",
        },
      },
      {
        status: 400,
      }
    );
  }
  const user = await cookieBasedClient.graphql({
    query: createPet,
    variables: {
      input: userData,
    },
  });
  return new Response(
    JSON.stringify(user.data.createPet),
    {
      headers: {
        "content-type": "application/json",
      },
    },
    {
      status: 201,
    }
  );
}

export async function PUT(request) {
  let userData;
  try {
    userData = await request.json();
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Invalid request body" }),
      {
        headers: {
          "content-type": "application/json",
        },
      },
      {
        status: 400,
      }
    );
  }
  const user = await cookieBasedClient.graphql({
    query: updatePet,
    variables: {
      input: userData,
    },
  });
  return new Response(
    JSON.stringify(user.data.createPet),
    {
      headers: {
        "content-type": "application/json",
      },
    },
    {
      status: 200,
    }
  );
}
