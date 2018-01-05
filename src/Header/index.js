import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Header = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-1">
            <Logo />
          </div>
          <div className="col-lg-5">
            <SearchForm />
          </div>
          <div className="col-lg-6">
            <Nav />
          </div>
        </div>
      </div>
    </Header>
  );
};
