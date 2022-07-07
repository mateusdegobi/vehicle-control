import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getRemoteItem, getRemoteList } from "../../database/firebase";

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
        <Link href={`${vehicle}/updateOdometer`}>
          <button>Atualizar odometro</button>
        </Link>
      </S.Banner>

      <S.Content>
        <ListHistory />
      </S.Content>
    </S.Background>
  );
}

export default VehicleData;
