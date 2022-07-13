import React from "react";

import * as S from "./views.styled";

type Props = {
  activeSwitcher: string;
  setActiveSwitcher: React.Dispatch<React.SetStateAction<string>>;
}
export function Views({activeSwitcher, setActiveSwitcher}: Props) {
  return (
    <S.Content>
      <S.Switcher>
        <S.Toggle active={activeSwitcher === "overview"} onClick={() => setActiveSwitcher('overview')}>Visão geral</S.Toggle>
        <S.Toggle active={activeSwitcher === "history"} onClick={() => setActiveSwitcher('history')}>Histórico</S.Toggle>
      </S.Switcher>
    </S.Content>
  );
}
