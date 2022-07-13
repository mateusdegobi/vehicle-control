import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const Switcher = styled.div`
  width: 100vw;
  display: flex;
  padding: 20px;
`;
type ToggleProps = {
  active?: boolean | undefined;
}
export const Toggle = styled.div<ToggleProps>`
  border: none;
  border-bottom: ${props => props.active ? `3px solid #555` : '2px solid #ccc'};
  background-color: transparent;
  color: ${props => props.active ? `#555` : '#ccc'};
  font-weight: ${props => props.active ? 600 : 500};
  font-size: 0.85rem;
  padding: 10px;
  cursor: pointer;
`;
