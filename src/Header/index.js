import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Wrapper = styled.div``;

const Header = styled.header`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Wrapper>
      <div className="container">
        <Header>
          <Logo />
          <SearchForm />
          <Nav />
        </Header>
      </div>
    </Wrapper>
  );
};
