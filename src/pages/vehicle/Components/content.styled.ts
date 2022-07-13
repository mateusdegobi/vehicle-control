import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #000;
  padding: 20px;
`;

export const TitleArea = styled.div``;
export const Title = styled.span`
  font-weight: 700;
  font-size: 21px;
  margin: 20px;
`;
export const IndicatorsArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const BoxIndicator = styled.div`
  width: 20vw;
  background-color: #666;
  padding: 10px;
  border-radius: 5px;
  min-height: 80px;
`;
export const TopIndicator = styled.div`
  display: flex;
  align-items: center;
`;

export const IconIndicator = styled.div`
  height: 25px;
  width: 25px;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
`;
export const TitleIndicator = styled.span`
  font-size: 1rem;
  margin: 0px 10px;
  font-weight: 500;
  color: #232323;
`;
export const BottomIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextIndicator = styled.span`
  font-size: 1.3rem;
  color: #212121;
  font-weight: 700;
`;
