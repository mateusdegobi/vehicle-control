import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  getRemoteItem,
  getRemoteList,
  pushDataToRemote,
  setDataToRemote,
} from "../../database/firebase";

import * as S from "./styles/vehicle.styled";
import { Transation } from "../../@types/VehicleResume";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { Views } from "./Components/Views";

const user = "kim3dis";
const PATH_VEHICLES = `/vehicles/${user}`;
const PATH_HISTORY = `/history/${user}/vehicles`;

function VehicleData() {
  const router = useRouter();
  const { vehicle } = router.query;

  const [data, setData] = useState<Transation[]>([]);
  const [currentOdometer, setCurrentOdometer] = useState("0");

  const [odometerInput, setOdometerInput] = useState(0);
  const [dateInput, setDateInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const [activeSwitcher, setActiveSwitcher] = useState("overview");

  useEffect(() => {
    async function getData() {
      const historyList = await getRemoteList(
        `${PATH_HISTORY}/${vehicle}/data`
      );
      const odometer = await getRemoteItem(
        `${PATH_HISTORY}/${vehicle}/currentOdometer`
      );

      setData(historyList);
      setCurrentOdometer(odometer);
    }
    getData();
  }, []);

  const sendData = useCallback(() => {
    const refdata = `/history/${user}/vehicles/${vehicle.toLowerCase()}/data`;
    const refodometer = `/history/${user}/vehicles/${vehicle.toLowerCase()}/currentOdometer`;
    const data = {
      date: dateInput,
      description: descInput,
      odometer: odometerInput,
      tag: tagInput,
    };
    pushDataToRemote(refdata, data);
    setDataToRemote(refodometer, odometerInput);
  }, [dateInput, descInput, odometerInput, tagInput]);

  const ListHistory = () => {
    if (!data) {
      return;
    }
    return data.map((transation) => {
      return (
        <div key={transation.odometer}>
          <p>{transation.date}</p>
          <p>{transation.odometer}</p>
          <p>
            {transation.description} - {transation.tag}
          </p>
        </div>
      );
    });
  };

  return (
    <S.Background>
      <Header />
      <Content currentOdometer={currentOdometer} />
      <Views activeSwitcher={activeSwitcher} setActiveSwitcher={setActiveSwitcher} />
    </S.Background>
  );
}

export default VehicleData;
