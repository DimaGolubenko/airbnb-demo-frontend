import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Homes from "./Homes";

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Wrap>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/homes" exact component={Homes} />
          </Wrap>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
