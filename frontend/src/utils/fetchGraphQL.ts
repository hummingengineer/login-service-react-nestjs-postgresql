export default async function fetchGraphQL(query: string) {
  const response = await fetch("https://localhost:3000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  return await response.json();
}
