import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { getUser, listUsers } from "../../../graphql/queries";
import { deleteUser } from "../../../graphql/mutations";
import WalkerTable from "./WalkerTable";
import DataWarning from "../DataWarning";

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
  const _cookies = cookies();
  let data = await fetchUsers();

  return (
    <section className="section">
      <div className="level">
        <h1 className="is-size-3 level-left">View all dog walkers</h1>
        <a className="button is-primary level-right" href="/register/walker">
          Add new walker
        </a>
      </div>

      <DataWarning />
      <WalkerTable users={data} />
    </section>
  );
}
