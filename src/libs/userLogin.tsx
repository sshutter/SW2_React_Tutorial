export default async function userLogin(
  userEmail: string,
  userPassword: string
) {
  const res = await fetch("http://localhost:3001/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, password: userPassword }),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  } else {
    return await res.json();
  }
}
