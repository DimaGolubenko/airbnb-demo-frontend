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
  const formattedDateFrom = moment(dateFrom).format("MMM Do");
  const formattedDateTo = moment(dateTo).format("MMM Do");
  if (dateFrom && dateTo) {
    return {
      from: formattedDateFrom,
      to: formattedDateTo
    };
  } else if (dateFrom) {
    return {
      from: formattedDateFrom,
      to: "Check out"
    };
  } else if (isOpen) {
    return {
      from: "Check in",
      to: "Check out"
    };
  } else {
    return {
      from: null,
      to: "Dates"
    };
  }
};

const getNumberOfMonths = () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return 12;
  } else if (window.matchMedia("(max-width: 992px)").matches) {
    return 1;
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    return 2;
  }
};

export default class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined,
      isMobile: window.matchMedia("(max-width: 768px)").matches,
      isCheckIn: true,
      isCheckOut: false
    };
  }

  handleIsOpen = () => {
    this.props.changeIsOpen();
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
  };

  handleSaveDates = () => {
    this.props.handleSaveDates(this.state.from, this.state.to);
    this.handleIsOpen();
  };

  activeCheckIn = () => {
    this.setState({
      isCheckIn: true,
      isCheckOut: false
    });
  };

  activeCheckOut = () => {
    this.setState({
      isCheckIn: false,
      isCheckOut: true
    });
  };

  render() {
    const from = this.state.from;
    const to = this.state.to;
    const modifiers = { start: from, end: to };
    const today = new Date();
    const checkLabels = formatDateLabel(
      this.state.from,
      this.state.to,
      this.props.isOpen
    );

    return (
      <Wrapper>
        <Button opened={this.props.isOpen} onClick={this.handleIsOpen}>
          {checkLabels.from && `${checkLabels.from} - `}
          {checkLabels.to}
        </Button>

        {this.state.isMobile &&
          this.props.isOpen && (
            <Portal>
              <Popup>
                <Close onClick={this.handleIsOpen} />
                <Title>Dates</Title>
                <Reset onClick={this.handleResetClick}>Reset</Reset>
                <Row>
                  <CheckIn
                    isChecked={this.state.isCheckIn}
                    onClick={this.activeCheckIn}
                  >
                    {checkLabels.from}
                  </CheckIn>
                  <Arrow />
                  <CheckOut
                    isChecked={this.state.isCheckOut}
                    onClick={this.activeCheckOut}
                  >
                    {checkLabels.to}
                  </CheckOut>
                </Row>
                <DayPicker
                  numberOfMonths={getNumberOfMonths()}
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

        {!this.state.isMobile &&
          this.props.isOpen && (
            <div>
              <Overlay onClick={this.handleIsOpen} />
              <Dropdown>
                <DayPicker
                  numberOfMonths={getNumberOfMonths()}
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
