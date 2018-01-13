import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0.8;
`;

export const Dropdown = styled.div`
  position: absolute;
  margin-top: 0.5rem;
  left: 0;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;
