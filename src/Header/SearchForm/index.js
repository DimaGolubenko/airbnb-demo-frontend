import React from "react";
import styled from "styled-components";
import search from "./search.svg";

const SearchForm = styled.form``;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding-left: 3.3rem;
  line-height: 3rem;
  color: #383838;
  background-color: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  background-image: url(${search});
  background-size: 1.3rem 1.3rem;
  background-position: 1rem center;
  background-repeat: no-repeat;
  opacity: 0.64;
`;

export default () => {
  return (
    <SearchForm>
      <Input type="text" name="search" placeholder="Try “Miami”" />
    </SearchForm>
  );
};
