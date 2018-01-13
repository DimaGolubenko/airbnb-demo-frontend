import React from "react";
import styled from "styled-components";
import { Portal } from "react-portal";
import moment from "moment";
import { DateUtils } from "react-day-picker";
import { Cancel, Apply } from "./styled";
import { Button, Close, Title, Reset, Popup } from "../styled";
import {
  Row,
  CheckIn,
  CheckOut,
  Arrow,
  DayPicker,
  Bottom,
  Save
} from "./styled";
import { Dropdown, Overlay } from "../../UI/Dropdown";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const formatDateLabel = (dateFrom, dateTo, isOpen) => {
  if (dateFrom && dateTo) {
    const formattedDateFrom = moment(dateFrom).format("MMM Do");
    const formattedDateTo = moment(dateTo).format("MMM Do");
    return `${formattedDateFrom} — ${formattedDateTo}`;
  } else if (isOpen) {
    return "Check in — Check out";
  } else {
    return "Dates";
  }
};

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      windowWidth: window.innerWidth
    };
  }

  handleIsOpen = () => {
    this.props.changeIsOpen();
  };

  handleCheck = () => {
    this.props.handleCheck();
  };

  handleResetClick = () => {
    this.setState({
      from: undefined,
      to: undefined,
      isDisabled: false
    });
    this.props.handleDaysReset();
  };

  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    this.props.handleSaveDates(range.from, range.to);
  };

  handleSaveDates = () => {
    this.props.handleSaveDates(this.state.from, this.state.to);
    this.handleIsOpen();
  };

  render() {
    const from = this.state.from;
    const to = this.state.to;
    const modifiers = { start: from, end: to };
    const today = new Date();

    if (this.state.windowWidth < 768) {
      return (
        <Wrapper>
          <Button onClick={this.handleIsOpen}>Dates</Button>
          {this.props.isOpen && (
            <Portal>
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
                </Row>
                <DayPicker
                  numberOfMonths={12}
                  selectedDays={[from, { from, to }]}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
                />
                <Bottom>
                  <Save onClick={this.handleSaveDates}>Save</Save>
                </Bottom>
              </Popup>
            </Portal>
          )}
        </Wrapper>
      );
    } else if (this.state.windowWidth > 768 && this.state.windowWidth < 992) {
      return (
        <Wrapper>
          <Button opened={this.props.isOpen} onClick={this.handleIsOpen}>
            {this.props.isOpen ? (
              <span>Check in - Check out</span>
            ) : (
              <span>Dates</span>
            )}
          </Button>
          {this.props.isOpen && (
            <div>
              <Overlay onClick={this.handleIsOpen} />
              <Dropdown>
                <DayPicker
                  numberOfMonths={1}
                  selectedDays={[from, { from, to }]}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
                />
                <Bottom>
                  <Cancel onClick={this.handleResetClick}>Cancel</Cancel>
                  <Apply onClick={this.handleSaveDates}>Apply</Apply>
                </Bottom>
              </Dropdown>
            </div>
          )}
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Button opened={this.props.isOpen} onClick={this.handleIsOpen}>
            {formatDateLabel(
              this.props.dateFrom,
              this.props.dateTo,
              this.props.isOpen
            )}
          </Button>
          {this.props.isOpen && (
            <div>
              <Overlay onClick={this.handleIsOpen} />
              <Dropdown>
                <DayPicker
                  numberOfMonths={2}
                  selectedDays={[from, { from, to }]}
                  modifiers={modifiers}
                  onDayClick={this.handleDayClick}
                  disabledDays={{ before: today }}
                />
                <Bottom>
                  <Cancel onClick={this.handleResetClick}>Cancel</Cancel>
                  <Apply onClick={this.handleSaveDates}>Apply</Apply>
                </Bottom>
              </Dropdown>
            </div>
          )}
        </Wrapper>
      );
    }
  }
}
