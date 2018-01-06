import styled from "styled-components";
import arrow from "../assets/arrow-down.svg";

export const Form = styled.form`
  position: relative;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

export const Select = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
`;

export const SelectButton = styled.button`
  display: absolute;
  width: 100%;
  height: 3rem;
  padding-left: 0.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  line-height: 1rem;
  background-color: #fff;
  background-image: url(${arrow});
  background-size: 1rem 0.5rem;
  background-position: right 1rem center;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
  @media (min-width: 992px) {
    padding-left: 1rem;
    font-size: 1.1rem;
    line-height: 1.25rem;
  }
`;

export const Option = styled.option``;

export const Hr = styled.hr`
  height: 1px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background-color: #484848;
  border: none;
  opacity: 0.08;

  @media (min-width: 768px) {
    margin-top: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 992px) {
    margin-top: 3rem;
  }
`;

export const Nav = styled.nav``;

export const Link = styled.a`
  display: block;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.5rem;
  color: #636363;
  margin: 0;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const Title = styled.h3`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  margin: 0;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #636363;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
