import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getUser, listUsers } from "../../../graphql/queries";
import { deleteUser } from "../../../graphql/mutations";
import UserTable from "./UserTable";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

async function fetchUsers() {
  const request = await cookieBasedClient.graphql({
    query: listUsers,
  });

  return request.data.listUsers.items;
}

export default async function ViewUser() {
  let data = await fetchUsers();

  return (
    <section className="section">
      <UserTable users={data} />
    </section>
  );
}
