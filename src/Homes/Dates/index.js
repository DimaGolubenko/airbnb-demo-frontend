import React from "react";
import styled from "styled-components";
import { DateUtils } from "react-day-picker";
import { Button, Close, Title, Reset } from "../Filters/styled";
import {
  Row,
  CheckIn,
  CheckOut,
  Arrow,
  Weekdays,
  Weekday,
  DayPicker,
  Bottom,
  Save
} from "./styled";
import Popup from "../../UI/Popup";

const Wrapper = styled.span`
  position: relative;
`;

export default class Dates extends React.Component {
  static defaultProps = {
    numberOfMonths: 2
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      windowWidth: window.innerWidth,
      isOpen: false,
      checkIn: true,
      checkOut: false
    };
  }

  handleCheckClick() {
    this.setState({
      checkIn: !this.state.checkIn,
      checkOut: !this.state.checkOut
    });
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState({
      from: undefined,
      to: undefined
    });
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    if (this.state.windowWidth < 768) {
      return (
        <Wrapper>
          <Button onClick={this.toggleOpen}>Dates</Button>
          {this.state.isOpen && (
            <Popup>
              <Close onClick={this.toggleOpen} />
              <Title>Dates</Title>
              <Reset onClick={this.handleResetClick}>Reset</Reset>
              <Row>
                <CheckIn
                  checked={this.state.checkIn}
                  onClick={this.handleCheckClick}
                >
                  CheckIn
                </CheckIn>
                <Arrow />
                <CheckOut
                  checked={this.state.checkOut}
                  onClick={this.handleCheckClick}
                >
                  CheckOut
                </CheckOut>
                <Weekdays>
                  <Weekday>Su</Weekday>
                  <Weekday>Mo</Weekday>
                  <Weekday>Tu</Weekday>
                  <Weekday>We</Weekday>
                  <Weekday>Th</Weekday>
                  <Weekday>Fr</Weekday>
                  <Weekday>Sa</Weekday>
                </Weekdays>
              </Row>
              <DayPicker
                numberOfMonths={this.props.numberOfMonths}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
              />
              <Bottom>
                <Save>Save</Save>
              </Bottom>
            </Popup>
          )}
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Button onClick={this.toggleOpen}>Dates</Button>
          {this.state.isOpen && (
            <DayPicker
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
          )}
        </Wrapper>
      );
    }
  }
}
