import React from "react";
import { DateUtils } from "react-day-picker";
import { formatDateLabel, getNumberOfMonths } from "./helpers";
import {
  Wrapper,
  Filter,
  Close,
  Title,
  Reset,
  Cancel,
  Apply,
  Bottom,
  Save
} from "../styled";
import Modal from "../../UI/Modal";
import { Row, CheckIn, CheckOut, Arrow, DayPicker } from "./styled";

export default class Dates extends React.Component {
  state = {
    from: undefined,
    to: undefined,
    isMobile: window.matchMedia("(max-width: 768px)").matches,
    isCheckIn: true,
    isCheckOut: false
  };

  handleIsOpen = () => {
    this.props.changeIsOpen("dates");
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
        <Filter opened={this.props.isOpen} onClick={this.handleIsOpen}>
          {checkLabels.from && `${checkLabels.from} - `}
          {checkLabels.to}
        </Filter>

        {this.props.isOpen && (
          <Modal handleIsOpen={this.handleIsOpen}>
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
              <Cancel onClick={this.handleResetClick}>Cancel</Cancel>
              <Apply onClick={this.handleSaveDates}>Apply</Apply>
            </Bottom>
          </Modal>
        )}
      </Wrapper>
    );
  }
}
