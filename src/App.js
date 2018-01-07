import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Wrap>
          <Header />
          <Main />
        </Wrap>
        <Footer />
      </div>
    );
  }
}

export default App;
