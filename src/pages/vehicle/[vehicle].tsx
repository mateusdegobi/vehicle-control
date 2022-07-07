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
import Link from "next/link";

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
      <S.Banner>
        <S.H1>{vehicle}</S.H1>
        <p>{currentOdometer}km de história</p>

        <div>
          <input
            type="number"
            placeholder="odometer"
            name="odometer"
            id="odometer"
            value={odometerInput}
            onChange={({ target: { value } }) => {
              console.log(value);
              setOdometerInput(Number(value));
            }}
          />
          <input
            type="date"
            placeholder="dd-mm-yyyy"
            name="date"
            id="date"
            value={dateInput}
            onChange={({ target: { value } }) => setDateInput(value)}
          />
          <input
            type="text"
            placeholder="desc"
            name="descricao"
            id="descricao"
            value={descInput}
            onChange={({ target: { value } }) => setDescInput(value)}
          />
          <input
            type="text"
            placeholder="tag"
            name="tag"
            id="tag"
            value={tagInput}
            onChange={({ target: { value } }) => setTagInput(value)}
          />
          <button onClick={sendData}>Atualizar odometro</button>
        </div>
      </S.Banner>

      <S.Content>
        <ListHistory />
      </S.Content>
    </S.Background>
  );
}

export default VehicleData;
