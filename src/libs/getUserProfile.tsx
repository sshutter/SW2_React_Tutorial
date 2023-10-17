export default async function getUserProfile(token: string) {
  const res = await fetch("http://localhost:3001/api/v1/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}
