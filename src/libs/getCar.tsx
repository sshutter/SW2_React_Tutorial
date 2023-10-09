export default async function getCar(id: string) {
  const res = await fetch("http:localhost:3001/api/v1/cars/" + id);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return await res.json();
}
