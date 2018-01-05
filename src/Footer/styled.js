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

export const FakeSelect = styled.button`
  display: absolute;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  text-align: left;
  background-color: #fff;
  background-image: url(${arrow});
  background-size: 1rem 0.5rem;
  background-position: right 1rem center;
  background-repeat: no-repeat;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 1;
`;

export const Option = styled.option``;

export const Hr = styled.hr`
  height: 1px;
  background-color: #484848;
  border: none;
  opacity: 0.08;
`;

export const Nav = styled.nav``;

export const Link = styled.a`
  display: block;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #636363;
`;

export const Title = styled.h3`
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Copyright = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #636363;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;
