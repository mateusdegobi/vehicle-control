import React from "react";
import {
  ButtonOdometer,
  ButtonSide,
  Container,
  IconUser,
  TitleUser,
  UserSide,
} from "./header.styled";

export default function Header() {
  return (
    <Container>
      <UserSide>
        <IconUser />
        <TitleUser>Lorem Impsum</TitleUser>
      </UserSide>
      <ButtonSide>
        <ButtonOdometer>Atualizar odometro</ButtonOdometer>
      </ButtonSide>
    </Container>
  );
}
