import styled from "styled-components";
import minus from "./minus.svg";
import plus from "./plus.svg";

export const Categories = styled.div`
  margin: 1.5rem 0.5rem 0.5rem 1.5rem;
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Adult = styled(Category)``;

export const Children = styled(Category)``;

export const Infants = styled(Category)``;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5.3rem;
`;

export const Right = styled.div``;

export const Title = styled.span`
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.span`
  font-size: 0.9rem;
  line-height: 1.25rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  color: #008489;
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: transparent;
  opacity: ${props => (props.disable ? "0.5" : "1")};
  cursor: ${props => (props.disable ? "inherit" : "pointer")};
`;

export const Minus = styled(Button)`
  background-image: url(${minus});
  background-size: 10px 2px;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Plus = styled(Button)`
  background-image: url(${plus});
  background-size: 10px 10px;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const Count = styled.span`
  font-size: 1.1rem;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`;
