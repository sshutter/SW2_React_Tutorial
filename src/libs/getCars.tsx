export default async function getCars() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/cars`, {
    next: { tags: ["cars"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetched cars.");
  }

  return await res.json();
}
