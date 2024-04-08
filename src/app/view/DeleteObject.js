"use server";

export default async function doDelete(type, id) {
  console.log(`Deleting ${type} with id ${id}`);

  switch (type) {
    case "pet":
      break;

    default:
      break;
  }
  if (type === "pet") {
    const request = await cookieBasedClient.graphql({
      query: deletePet,
      variables: {
        input: {
          id,
        },
      },
    });

    console.log("Deleted pet", request);
  }
}
