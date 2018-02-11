import styled from 'styled-components';
import ReactDayPicker from 'react-day-picker';
import arrow from './arrow.svg';
import arrowDropdown from '../../assets/arrowDropdown.svg';

export const DayPicker = styled(ReactDayPicker)`
  .DayPicker {
    display: flex;
    justify-content: center;
  }
  .DayPicker-wrapper {
    position: relative;
    user-select: none;
    margin: 1rem 0.5rem 0 0.5rem;
    flex-direction: row;
    border-top: 1px solid rgba(72, 72, 72, 0.2);

    @media (min-width: 768px) {
      border-top: none;
      padding-bottom: none;
    }
  }
  .DayPicker-Body {
    display: table-row-group;
  }
  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 992px) {
      flex-wrap: nowrap;
    }
  }
  .DayPicker-Month {
    border-collapse: collapse;
    border-spacing: 0;
    user-select: none;
    margin: 0 0.25rem;
    margin-top: 1rem;
    text-align: center;

    @media (min-white: 992px) {
      display: inline-block;
    }
  }
  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
    margin: 0 auto;
    padding-bottom: 0.5rem;
  }

  .DayPicker-Months .DayPicker-Weekdays {
    display: none;

    @media (min-width: 768px) {
      margin-top: 1rem;
      display: table-header-group;
    }
  }

  .DayPicker-Month:first-child .DayPicker-Weekdays {
    position: absolute;
    top: -1.2rem;
    left: center;
    display: table-header-group;
    paddin-bottom: 3rem;

    @media (min-width: 768px) {
      position: inherit;
    }
  }

  .DayPicker-Weekday {
    display: table-cell;
    padding: 0 0.8rem;
    padding-bottom: 0.2rem;
    font-size: 0.75em;
    text-align: center;
    color: #636363;
  }

  .DayPicker-Weekday abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }

  .DayPicker-Caption {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    font-family: 'CircularAirBold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
  }

  .DayPicker-NavButton {
    display: none;

    @media (min-width: 768px) {
      position: absolute;
      cursor: pointer;
      top: 3rem;
      right: 1.5rem;
      color: #8b9898;
      width: 1.25rem;
      height: 1.25rem;
      display: inline-block;
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .DayPicker-NavButton {
    position: abbolute;
    top: 0;
    width: 2.5rem;
    height: 2rem;
    margin-top: 1rem;
    border: 1px solid rgba(72, 72, 72, 0.3);
    border-radius: 2px;
    box-sizing: border-box;
    color: #767676;
  }

  .DayPicker-NavButton--prev {
    left: 0;
    margin-right: 1.5rem;
    margin-left: 1rem;
    background-image: url(${arrowDropdown});
    transform: rotate(-180deg);
  }

  .DayPicker-NavButton--next {
    margin-right: 1rem;
    right: 0;
    background-image: url(${arrowDropdown});
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }
  .DayPicker-Day {
    display: table-cell;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    outline: none;
    border: 1px solid #d5d5d5;
    font-size: 0.9rem;
    color: #383838;
    padding: 0.7rem 0.7rem;
    box-sizing: border-box;
  }
  .DayPicker-Day--start,
  .DayPicker-Day--end {
    background-color: #008489;
  }
  .DayPicker-Day--outside {
    border: none;
  }
  .DayPicker-Day--disabled {
    color: #cbcbcb;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):not(.DayPicker-Day--start):not(.DayPicker-Day--end) {
    background-color: rgba(0, 132, 137, 0.1);
    border: 1px solid #9cd9d9;
  }
  .DayPicker-Week:first-child,
  .DayPicker-Week:nth-child(2) {
    color: ${props => (props.isFirst ? '#cbcbcb' : '#383838')};
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Row = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin: 0;
    display: none;
  }
`;

export const Check = styled.span`
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-family: 'CircularAirLight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: ${props => (props.isChecked ? '#0f7276' : 'inherit')};
  border-bottom: ${props => (props.isChecked ? '2px solid #0f7276' : 'none')};
`;

export const CheckIn = styled(Check)``;

export const CheckOut = styled(Check)``;

export const Arrow = styled.span`
  display: inline-block;
  width: 1.1rem;
  height: 0.7rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background-image: url(${arrow});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
