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
    isCheckIn: true,
    isCheckOut: false
  };

  handleIsOpen = () => {
    this.props.changeIsOpen("dates");
  };

  handleResetClick = () => {
    this.props.handleDaysReset();
  };

  handleDayClick = day => {
    const from = this.props.from;
    const to = this.props.to;
    const range = DateUtils.addDayToRange(day, { from, to });
    this.handleSaveDates(range);
  };

  handleSaveDates = range => {
    this.props.handleSaveDates(range.from, range.to);
  };

  handleSearch = () => {
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
    const from = this.props.from;
    const to = this.props.to;
    const modifiers = { start: from, end: to };
    const checkLabels = formatDateLabel(
      this.props.from,
      this.props.to,
      this.props.isOpen
    );

    return (
      <Wrapper>
        <Filter opened={this.props.isOpen} onClick={this.handleIsOpen}>
          {checkLabels ? `${checkLabels.from} – ${checkLabels.to}` : "Dates"}
        </Filter>

        {this.props.isOpen && (
          <Modal
            handleIsOpen={this.handleIsOpen}
            handleResetClick={this.handleResetClick}
          >
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
              <Save onClick={this.handleSearch}>Save</Save>
              <Cancel onClick={this.handleResetClick}>Cancel</Cancel>
              <Apply onClick={this.handleSearch}>Apply</Apply>
            </Bottom>
          </Modal>
        )}
      </Wrapper>
    );
  }
}
