import React from 'react';
import Categories from './Categories';
import Modal from '../../UI/Modal';
import { Wrapper, Filter, Bottom, Cancel, Apply, Close, Title, Reset, Save } from '../styled';

const isPlural = total => (total > 1 ? 's' : '');

const showTitle = (guests) => {
  const { adults, children, infants } = guests;
  const totalGuests = Number(adults) + Number(children);
  if (infants > 0) {
    return `${totalGuests} guest${isPlural(totalGuests)}, ${infants} infant${isPlural(infants)}`;
  }
  if (totalGuests > 1) {
    return `${totalGuests} guest${isPlural(totalGuests)}`;
  }
  return 'Guests';
};

export default ({
  isOpen,
  guests,
  decrementGuests,
  incrementGuests,
  handleGuestsClear,
  toggleVisibility,
}) => (
  <Wrapper>
    <Filter onClick={toggleVisibility}>{showTitle(guests)}</Filter>
    {isOpen && (
      <Modal handleIsOpen={toggleVisibility} isFixed>
        <Close onClick={toggleVisibility} />
        <Title>Guests</Title>
        <Reset onClick={handleGuestsClear}>Reset</Reset>
        <Categories
          decrementGuests={decrementGuests}
          incrementGuests={incrementGuests}
          changeIsOpen={toggleVisibility}
          guests={guests}
        />
        <Bottom>
          <Cancel onClick={handleGuestsClear}>Cancel</Cancel>
          <Apply onClick={toggleVisibility}>Apply</Apply>
          <Save onClick={toggleVisibility}>Save</Save>
        </Bottom>
      </Modal>
    )}
  </Wrapper>
);
