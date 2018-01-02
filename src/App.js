import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 29rem;
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Main />
        <Footer />
      </Wrap>
    );
  }
}

export default App;
