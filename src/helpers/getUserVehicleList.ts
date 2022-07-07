import { getRemoteList } from "../database/firebase";

export default async function getUserVehicleList(vehiclesRef: string) {
  const vehicleList = await getRemoteList(vehiclesRef);
  return vehicleList;
}
