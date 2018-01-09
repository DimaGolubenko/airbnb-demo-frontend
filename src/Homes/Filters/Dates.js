import React from "react";
import styled from "styled-components";
import { Button, Close, Title, Reset } from "./styled";
import { Popup } from "../../UI/Popup";
import Calendar from "../../UI/Calendar";

const Wrapper = styled.span`
  position: relative;
`;

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  state = {
    isOpen: false
  };

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Wrapper>
        <Button onClick={this.toggleOpen}>Dates</Button>
        {this.state.isOpen && (
          <Popup>
            <Close onClick={this.toggleOpen} />
            <Title>Dates</Title>
            <Reset>Reset</Reset>
            <Calendar />
          </Popup>
        )}
      </Wrapper>
    );
  }
}
