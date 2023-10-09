export default async function getCars() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("http://localhost:3001/api/v1/cars");
  if (!res.ok) {
    throw new Error("Failed to fetched cars.");
  }

  return await res.json();
}
