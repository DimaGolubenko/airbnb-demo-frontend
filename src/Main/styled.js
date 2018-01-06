import styled from "styled-components";
import arrowRight from "../assets/arrow-right.svg";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #383838;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.1rem;
  }
`;

export const Slider = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: nowrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  overflow: hidden;
`;

export const Card = styled.div``;

export const Link = styled.a`
  display: block;
`;

export const SeeAll = styled.a`
  white-space: nowrap;
  padding-right: 1rem;
  font-size: 0.8rem;
  font-family: "CircularAirBook", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 1.5rem;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 0.4rem 0.6rem;
  background-position: right 0.25rem center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SliderArrow = styled.button`
  display: none;

  @media (min-width: 992px) {
    display: block;
    position: absolute;
    top: center;
    right: -1.25rem;
    width: 2.5rem;
    height: 2.5rem;
    box-sizing: border-box;
    background-color: #fff;
    background-image: url(${arrowRight});
    background-repeat: no-repeat;
    background-size: 0.6rem 1.1rem;
    background-position: center center;
    border: 0.05rem solid rgba(72, 72, 72, 0.2);
    box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.16);
    border-radius: 1.25rem;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 0.75rem;
`;
