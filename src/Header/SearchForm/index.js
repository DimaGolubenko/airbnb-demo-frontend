import React from "react";
import styled from "styled-components";
import search from "./search.svg";

const SearchForm = styled.form`
  box-sizing: border-box;
  width: 100%;
  margin-right: 0.5rem;
  color: #383838;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-left: 0.5rem;
  padding-left: 3.3rem;
  line-height: 2.75rem;
  font-size: 1rem;
  font-family: "CircularAirBook", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  background-image: url(${search});
  background-size: 1.3rem 1.3rem;
  background-position: 1rem center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    margin-left: 1rem;
    width: 27rem;
  }

  @media (min-width: 992px) {
    margin-left: 4.25rem;
    width: 24.5rem;
  }
`;

export default () => {
  return (
    <SearchForm>
      <Input type="text" name="search" placeholder="Anywhere  ·  Homes" />
    </SearchForm>
  );
};
