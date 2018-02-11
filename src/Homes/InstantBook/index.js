import React from 'react';

import Checkbox from './Checkbox';
import Modal from '../../UI/Modal';
import { Content, Row, Title, Description } from './styled';
import { Wrapper, Filter, Bottom, Cancel, Apply } from '../styled';

export default ({
  isOpen, isActive, toggleVisibility, toggleActivity, reset,
}) => {
  const resetFilter = () => {
    reset();
    toggleVisibility();
  };

  return (
    <Wrapper>
      <Filter isHidden onClick={toggleVisibility}>
        Instant Book
      </Filter>
      {isOpen && (
        <Modal handleIsOpen={toggleVisibility} isFixed>
          <Content>
            <Row>
              <Title>Instant Book</Title>
              <Description>Listings you can book without waiting for host approval.</Description>
            </Row>
            <Checkbox isActive={isActive} toggle={toggleActivity} />
          </Content>

          <Bottom>
            <Cancel onClick={resetFilter}>Cancel</Cancel>
            <Apply onClick={toggleVisibility}>Apply</Apply>
          </Bottom>
        </Modal>
      )}
    </Wrapper>
  );
};
