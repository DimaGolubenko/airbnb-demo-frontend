import styled from "styled-components";
import ReactDayPicker from "react-day-picker";
import arrow from "./arrow.svg";

export const Weekdays = styled.div`
  padding: 0.5rem;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
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
  }
  .DayPicker-Body {
    display: table-row-group;
  }
  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .DayPicker-Month {
    border-collapse: collapse;
    border-spacing: 0;
    user-select: none;
    margin: 0 1rem;
    margin-top: 1rem;
    text-align: center;
  }
  .DayPicker-Week {
    display: table-row;
  }
  .DayPicker-Weekdays {
    display: none;
  }
  .DayPicker-Caption {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    text-align: center;
  }
  .DayPicker-NavButton {
    display: none;
  }
  .DayPicker-Day {
    display: table-cell;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    outline: none;
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid #d5d5d5;
    font-size: 0.75rem;
    padding: 0;
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
