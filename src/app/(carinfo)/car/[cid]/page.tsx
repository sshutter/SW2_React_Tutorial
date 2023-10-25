import Image from "next/image";
import { mock } from "node:test";
import getCar from "@/libs/getCar";
import Link from "next/link";

export default async function CarDetailPage({
  params,
}: {
  params: { cid: string };
}) {
  const carDetail = await getCar(params.cid);
  // /**
  //  * Mock data for demonstration only
  //  */
  // const mockCarRepo = new Map();
  // mockCarRepo.set("001", {
  //   cid: "001",
  //   name: "Honda Civic",
  //   imgSrc: "/img/civic.jpg",
  // });
  // mockCarRepo.set("002", {
  //   cid: "002",
  //   name: "Honda Accord",
  //   imgSrc: "/img/accord.jpg",
  // });
  // mockCarRepo.set("003", {
  //   cid: "003",
  //   name: "Toyota Fortuner",
  //   imgSrc: "/img/fortuner.jpg",
  // });
  // mockCarRepo.set("004", {
  //   cid: "004",
  //   name: "Tesla Model 3",
  //   imgSrc: "/img/tesla.jpg",
  // });

  return (
    <main className="text-center p-5">
      <h1 className="text-lg text-black font-medium">{carDetail.data.model}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={carDetail.data.picture}
          alt="Car Image"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />
        <div className="text-md mx-5 text-black text-left">
          {carDetail.data.description}
          <div className="text-md mx-5 text-black">
            Doors: {carDetail.data.doors}
          </div>
          <div className="text-md mx-5 text-black">
            Seets: {carDetail.data.seets}
          </div>
          <div className="text-md mx-5 text-black">
            Large Bags: {carDetail.data.largebags}
          </div>
          <div className="text-md mx-5 text-black">
            Small Bags: {carDetail.data.smallbags}
          </div>
          <div className="text-md mx-5 text-black">
            Daily Rental Rate: {carDetail.data.dayRate} (insurance included)
          </div>

          <Link
            href={`/reservations?id=${carDetail.data.id}&model=${carDetail.data.model}`}
          >
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
              Make Reservation
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [{ cid: "001" }, { cid: "002" }, { cid: "003" }, { cid: "004" }];
}
