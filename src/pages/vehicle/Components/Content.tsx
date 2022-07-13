import React from "react";
import * as S from "./content.styled";

type Props = {
  currentOdometer: string;
};
export default function Content({ currentOdometer }: Props) {
  return (
    <S.Container>
      <S.TitleArea>
        <S.Title>Status</S.Title>
      </S.TitleArea>
      <S.IndicatorsArea>
        <S.BoxIndicator>
          <S.TopIndicator>
            <S.IconIndicator />
            <S.TitleIndicator>Odometro atual</S.TitleIndicator>
          </S.TopIndicator>
          <S.BottomIndicator>
            <S.TextIndicator>{currentOdometer} km</S.TextIndicator>
          </S.BottomIndicator>
        </S.BoxIndicator>
        <S.BoxIndicator>
          <S.TopIndicator>
            <S.IconIndicator />
            <S.TitleIndicator>Troca de oléo em</S.TitleIndicator>
          </S.TopIndicator>
          <S.BottomIndicator>
            <S.TextIndicator>{currentOdometer}km</S.TextIndicator>
          </S.BottomIndicator>
        </S.BoxIndicator>
      </S.IndicatorsArea>
    </S.Container>
  );
}
