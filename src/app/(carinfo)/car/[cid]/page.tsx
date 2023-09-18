import Image from "next/image";
import { mock } from "node:test";

export default function CarDetailPage({ params }: { params: { cid: string } }) {
  /**
   * Mock data for demonstration only
   */
  const mockCarRepo = new Map();
  mockCarRepo.set("001", {
    cid: "001",
    name: "Honda Civic",
    imgSrc: "/img/civic.jpg",
  });
  mockCarRepo.set("002", {
    cid: "002",
    name: "Honda Accord",
    imgSrc: "/img/accord.jpg",
  });
  mockCarRepo.set("003", {
    cid: "003",
    name: "Toyota Fortuner",
    imgSrc: "/img/fortuner.jpg",
  });
  mockCarRepo.set("004", {
    cid: "004",
    name: "Tesla Model 3",
    imgSrc: "/img/tesla.jpg",
  });

  return (
    <main className="text-center p-5">
      <h1 className="text-lg text-black font-medium">Car ID {params.cid}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={mockCarRepo.get(params.cid).imgSrc}
          alt="Car Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <div className="text-md mx-5 text-black">
          {mockCarRepo.get(params.cid).name}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ cid: "001" }, { cid: "002" }, { cid: "003" }, { cid: "004" }];
}
