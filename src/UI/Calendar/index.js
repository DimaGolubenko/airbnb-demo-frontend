import React from "react";
import styled from "styled-components";
import ReactDayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import arrow from "./arrow.svg";

const Calendar = styled.section`
  margin: 0 auto;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  background: #fff;
`;

const Weekdays = styled.div`
  padding: 0.5rem;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Weekday = styled.span`
  display: inline-block;
  text-align: center;
  font-size: 0.75rem;
  width: 2.8rem;
`;

const DayPicker = styled(ReactDayPicker)`
  .DayPicker {
    display: flex;
    justify-content: center;
  }
  .DayPicker-Month {
    margin: 0;
    margin-top: 1rem;
  }
  .DayPicker-Weekdays {
    display: none;
  }
  .DayPicker-Caption {
    font-size: 1rem;
    font-family: "CircularAirBold", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    text-align: center;
  }
  .DayPicker-NavButton {
    display: none;
  }
  .DayPicker-Day {
    width: 2.75rem;
    height: 2.75rem;
    border: 1px solid #d5d5d5;
    font-size: 0.75rem;
    padding: 0;
  }
  .DayPicker-Day--outside {
    border: none;
  }
  .DayPicker-Week:first-child,
  .DayPicker-Week:nth-child(2) {
    color: ${props => (props.isFirst ? "#cbcbcb" : "#383838")};
  }
`;

const Row = styled.div``;

const Check = styled.span`
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-family: "CircularAirLight", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
`;

const CheckIn = styled(Check)`
  color: #0f7276;
  border-bottom: 2px solid #0f7276;
`;

const CheckOut = styled(Check)``;

const Arrow = styled.span`
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

export default () => {
  return (
    <Calendar>
      <Row>
        <CheckIn>CheckIn</CheckIn>
        <Arrow />
        <CheckOut>CheckOut</CheckOut>
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
      <DayPicker isFirst="true" month={new Date(2017, 10)} />
      <DayPicker month={new Date(2017, 11)} />
    </Calendar>
  );
};
