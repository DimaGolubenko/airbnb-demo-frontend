import styled from "styled-components";
import ReactDayPicker from "react-day-picker";
import arrow from "./arrow.svg";
import arrowDropdown from "../../assets/arrowDropdown.svg";

export const Weekdays = styled.div`
  padding: 0.5rem;
`;

export const Weekday = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 0.75rem;
  width: 2.8rem;
`;

export const DayPicker = styled(ReactDayPicker)`
  .DayPicker {
    display: flex;
    justify-content: center;
  }
  .DayPicker-wrapper {
    position: relative;
    user-select: none;
    padding-bottom: 1rem;
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
    margin: 0 1rem;
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
  }

  .DayPicker-Weekdays {
    display: none;

    @media (min-width: 768px) {
      margin-top: 1rem;
      display: table-header-group;
    }
  }

  .DayPicker-Weekday {
    display: table-cell;
    padding: 0.5rem;
    font-size: 0.875em;
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
    font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    text-align: center;
  }

  .DayPicker-NavBar {
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
    font-size: 1rem;
    padding: 0.8rem 0.8rem;
    box-sizing: border-box;
  }
  .DayPicker-Day--start,
  .DayPicker-Day--end {
    background-color: #008489;
  }
  .DayPicker-Day--outside {
    border: none;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):not(.DayPicker-Day--start):not(.DayPicker-Day--end) {
    background-color: rgba(0, 132, 137, 0.1);
    border: 1px solid #9cd9d9;
  }
  .DayPicker-Week:first-child,
  .DayPicker-Week:nth-child(2) {
    color: ${props => (props.isFirst ? "#cbcbcb" : "#383838")};
  }
`;

export const Row = styled.div`
  padding: 0 0.5rem;
`;

export const Check = styled.span`
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  color: ${props => (props.checked ? "#0f7276" : "inherit")};
  border-bottom: ${props => (props.checked ? "2px solid #0f7276" : "none")};
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

export const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background-color: #fff;
  border-top: 1px solid rgba(72, 72, 72, 0.2);

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: space-between;
    border: none;
  }
`;

export const Save = styled.button`
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5a5f;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0px -1px 0px #d5d5d5;
  cursor: pointer;
`;

const Button = styled.button`
  font-size: 1rem;
  font-family: "CircularAirBook", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 1rem;
  color: #636363;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Cancel = styled(Button)``;

export const Apply = styled(Button)`
  color: #0f7276;
`;
