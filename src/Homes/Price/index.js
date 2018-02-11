import React from 'react';

import { Wrapper, Filter, Bottom, Cancel, Apply } from '../styled';
import { Range, Info, Rheostat } from './styled';
import Modal from '../../UI/Modal';

export default class Price extends React.Component {
  updatePrice = (range) => {
    this.props.updatePrice({
      from: range.values[0],
      to: range.values[1],
    });
  };

  render() {
    const {
      price, min, max, toggleVisibility,
    } = this.props;

    return (
      <Wrapper>
        <Filter isHidden opened={this.props.isOpen} onClick={toggleVisibility}>
          {this.props.filterTitle || 'Price'}
        </Filter>
        {this.props.isOpen && (
          <Modal handleIsOpen={toggleVisibility}>
            <Range>{`$${price.from} - $${price.to}`}</Range>
            <Info>The average nightly price is $75.</Info>
            <Rheostat
              min={min}
              max={max}
              onValuesUpdated={this.updatePrice}
              values={[price.from, price.to]}
            />
            <Bottom>
              <Cancel onClick={this.props.handlePriceClear}>Cancel</Cancel>
              <Apply onClick={toggleVisibility}>Apply</Apply>
            </Bottom>
          </Modal>
        )}
      </Wrapper>
    );
  }
}
