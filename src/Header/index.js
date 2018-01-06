import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Header = styled.header``;

export default () => {
  return (
    <Header>
      <div className="container">
        <Wrapper>
          <Logo />
          <SearchForm />
          <Nav />
        </Wrapper>
      </div>
    </Header>
  );
};
