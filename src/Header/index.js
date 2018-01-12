import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Header = styled.header`
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  box-shadow: 0px 0.03rem 0px rgba(72, 72, 72, 0.3);
  z-index: 3;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
`;

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
