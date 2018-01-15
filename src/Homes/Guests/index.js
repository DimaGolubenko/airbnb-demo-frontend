import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Modal from "../../UI/Modal";
import {
  Wrapper,
  Filter,
  Bottom,
  Cancel,
  Apply,
  Close,
  Title,
  Reset,
  Save
} from "../styled";

export default props => {
  const handleIsOpen = () => {
    props.changeIsOpen("guests");
  };

  const handleGuestsClear = () => {
    props.handleGuestsClear();
  };

  return (
    <Wrapper>
      <Filter onClick={handleIsOpen}>Guests</Filter>
      {props.isOpen && (
        <Modal handleIsOpen={handleIsOpen} isFixed={true}>
          <Close onClick={handleIsOpen} />
          <Title>Guests</Title>
          <Reset onClick={handleGuestsClear}>Reset</Reset>
          <Categories
            decrementGuests={props.decrementGuests}
            incrementGuests={props.incrementGuests}
            changeIsOpen={props.changeIsOpen}
            guests={props.guests}
          />
          <Bottom>
            <Cancel onClick={handleGuestsClear}>Cancel</Cancel>
            <Apply onClick={handleIsOpen}>Apply</Apply>
            <Save onClick={handleIsOpen}>Save</Save>
          </Bottom>
        </Modal>
      )}
    </Wrapper>
  );
};
