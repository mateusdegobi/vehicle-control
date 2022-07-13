import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
`;

export const UserSide = styled.div`
  display: flex;
  align-items: center;
`;

export const IconUser = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: #ccc;
  margin: 0px 10px;
`;
export const TitleUser = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
`;

export const ButtonSide = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonOdometer = styled.button`
  height: 30px;
  width: 150px;
  border: 2px solid #666;
  background-color: transparent;
  cursor: pointer;
  border-radius: 10px;
  margin: 0px 10px;
`;