import React from 'react';
import { Wrapper, Filter, Bottom, Cancel, Apply } from '../styled';
import Types from './Types';

import Modal from '../../UI/Modal';

export default ({
  isOpen,
  roomType,
  filterTitle,
  checkRoomType,
  setFilterTitle,
  handleRoomTypeClear,
  toggleVisibility,
}) => (
  <Wrapper>
    <Filter isHidden opened={isOpen} onClick={toggleVisibility}>
      {filterTitle || 'Room type'}
    </Filter>
    {isOpen && (
      <Modal handleIsOpen={toggleVisibility}>
        <Types
          roomType={roomType}
          checkRoomType={checkRoomType}
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
        />
        <Bottom>
          <Cancel onClick={handleRoomTypeClear}>Cancel</Cancel>
          <Apply onClick={toggleVisibility}>Apply</Apply>
        </Bottom>
      </Modal>
    )}
  </Wrapper>
);
