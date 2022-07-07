import Link from "next/link";
import React, { useEffect, useState } from "react";
import getUserVehicleList from "../helpers/getUserVehicleList";

const user = "kim3dis";
const PATH_VEHICLES = `/vehicles/${user}/`;
const PATH_HISTORY = `/history/${user}/vehicles/`;

type Params = {
  user: string;
};
export default function Home() {
  const ListVehicles = () => {
    const [data, updateDate] = useState<any[]>([]);

    useEffect(() => {
      async function getData() {
        const listVehicle = await getUserVehicleList(PATH_VEHICLES);
        updateDate(listVehicle);
      }
      getData();
    }, []);
    return data && <List data={data} />;
  };

  function List({ data }: { data: any[] }) {
    return (
      <div>
        {data.map((vehicle) => (
          <Link href={`/vehicle/${vehicle.name}`} key={vehicle.name}>
            <a>{vehicle.name}</a>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h3></h3>
      <ListVehicles />
    </div>
  );
}
