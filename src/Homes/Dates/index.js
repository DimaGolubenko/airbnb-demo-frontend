import React from 'react';
import { DateUtils } from 'react-day-picker';
import { formatDateLabel, getNumberOfMonths } from './helpers';
import { Wrapper, Filter, Close, Title, Reset, Cancel, Apply, Bottom, Save } from '../styled';
import Modal from '../../UI/Modal';
import { Row, CheckIn, CheckOut, Arrow, DayPicker } from './styled';

export default class Dates extends React.Component {
  state = {
    isCheckIn: true,
    isCheckOut: false,
  };

  handleSaveDates = (range) => {
    this.props.handleSaveDates(range.from, range.to);
  };

  handleIsOpen = () => {
    this.props.toggleVisibility();
  };

  handleResetClick = () => {
    const { resetDates, toggleVisibility } = this.props;
    resetDates();
    toggleVisibility();
  };

  handleDayClick = (day) => {
    const { from, to, saveDates } = this.props;
    const range = DateUtils.addDayToRange(day, { from, to });
    saveDates(range.from, range.to);
  };

  toggleCheck = (isChecked) => {
    if (!isChecked) {
      this.setState({
        isCheckIn: !this.state.isCheckIn,
        isCheckOut: !this.state.isCheckOut,
      });
    }
  };

  render() {
    const {
      isOpen, from, to, toggleVisibility,
    } = this.props;
    const { isCheckIn, isCheckOut } = this.state;
    const modifiers = { start: from, end: to };
    const checkLabels = formatDateLabel(this.props.from, this.props.to, this.props.isOpen);

    return (
      <Wrapper>
        <Filter opened={isOpen} onClick={toggleVisibility}>
          {checkLabels ? `${checkLabels.from} – ${checkLabels.to}` : 'Dates'}
        </Filter>

        {isOpen && (
          <Modal handleIsOpen={toggleVisibility} handleResetClick={this.handleResetClick}>
            <Close onClick={toggleVisibility} />
            <Title>Dates</Title>
            <Reset onClick={this.handleResetClick}>Reset</Reset>
            <Row>
              <CheckIn isChecked={isCheckIn} onClick={() => this.toggleCheck(isCheckIn)}>
                {checkLabels.from}
              </CheckIn>
              <Arrow />
              <CheckOut isChecked={isCheckOut} onClick={() => this.toggleCheck(isCheckOut)}>
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
              <Save onClick={toggleVisibility}>Save</Save>
              <Cancel onClick={this.handleResetClick}>Cancel</Cancel>
              <Apply onClick={toggleVisibility}>Apply</Apply>
            </Bottom>
          </Modal>
        )}
      </Wrapper>
    );
  }
}
