import React from "react";
import styled from "styled-components";
import { DateUtils } from "react-day-picker";
import { Button, Close, Title, Reset } from "../styled";
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
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleIsOpen = this.handleIsOpen.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSaveDates = this.handleSaveDates.bind(this);
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      windowWidth: window.innerWidth
    };
  }

  handleIsOpen() {
    this.props.changeIsOpen();
  }

  handleCheck() {
    this.props.handleCheck();
  }

  handleResetClick() {
    this.setState({
      from: undefined,
      to: undefined
    });
    this.props.handleDaysReset();
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleSaveDates() {
    this.props.handleSaveDates(this.state.from, this.state.to);
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };

    if (this.state.windowWidth < 768) {
      return (
        <Wrapper>
          <Button onClick={this.handleIsOpen}>Dates</Button>
          {this.props.isOpen && (
            <Popup>
              <Close onClick={this.handleIsOpen} />
              <Title>Dates</Title>
              <Reset onClick={this.handleResetClick}>Reset</Reset>
              <Row>
                <CheckIn
                  checked={this.props.isCheckIn}
                  onClick={this.handleCheck}
                >
                  CheckIn
                </CheckIn>
                <Arrow />
                <CheckOut
                  checked={this.props.isCheckOut}
                  onClick={this.handleCheck}
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
                <Save onClick={this.handleSaveDates}>Save</Save>
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
