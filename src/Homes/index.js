import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import GoogleMap from './GoogleMap';
import Card from './Card';
import Pagination from './Pagination';
import Info from './Info';
import Location from './Location';
import Dates from './Dates';
import Guests from './Guests';
import RoomType from './RoomType';
import Price from './Price';
import InstantBook from './InstantBook';
import { Filter, Filters } from './styled';
import img1 from './homes-1.jpg';
import img2 from './homes-2.jpg';
import img3 from './homes-3.jpg';
import img4 from './homes-4.jpg';
import img5 from './homes-5.jpg';
import img6 from './homes-6.jpg';

const Wrapper = styled.div``;

const Cards = styled.section`
  position: relative;
  margin-top: 8.5rem;
  box-sizing: border-box;
`;

export default class Homes extends React.Component {
  state = {
    isOpen: {
      dates: false,
      guests: false,
      roomType: false,
      price: false,
      instantBook: false,
    },
    guests: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    roomType: {
      entireHome: false,
      privateRoom: false,
      sharedRoom: false,
    },
    roomTypeTitle: 'Room type',
    price: { from: 10, to: 1000 },
    dateFrom: undefined,
    dateTo: undefined,
    isActiveCheckboxInstantBook: false,
  };

  setRoomTypeTitle = (title) => {
    this.setState({
      roomTypeTitle: title,
    });
  };

  closeAllFilters = () => {
    this.setState({
      isOpen: {
        dates: false,
        guests: false,
        roomType: false,
        price: false,
        instantBook: false,
      },
    });
  };

  handleIsOpen = (filter) => {
    this.closeAllFilters();
    this.setState({
      isOpen: {
        [filter]: !this.state.isOpen[filter],
      },
    });
  };

  handleDaysReset = () => {
    this.setState({
      dateFrom: undefined,
      dateTo: undefined,
    });
  };

  handleSaveDates = (dateFrom, dateTo) => {
    this.setState({
      dateFrom,
      dateTo,
    });
  };

  decrementGuests = (type, count) => {
    this.setState({ guests: { ...this.state.guests, [type]: [count] } });
  };

  incrementGuests = (type, count) => {
    this.setState({
      ...this.state,
      guests: { ...this.state.guests, [type]: [count] },
    });
  };

  handleGuestsClear = () => {
    this.setState({
      guests: {
        adult: 0,
        children: 0,
        infants: 0,
      },
    });
  };

  checkRoomType = (type, isChecked) => {
    this.setState({
      roomType: {
        ...this.state.roomType,
        [type]: !isChecked,
      },
    });
  };

  handleRoomTypeClear = () => {
    this.setState({
      roomType: {
        entireHome: false,
        privateRoom: false,
        sharedRoom: false,
      },
    });
    this.handleIsOpen();
  };

  updatePrice = (price) => {
    this.setState({ price });
  };

  toggleInstantBookActivity = () => {
    this.setState({
      isActiveCheckboxInstantBook: !this.state.isActiveCheckboxInstantBook,
    });
  };

  resetInstantBookFilter = () => {
    this.setState({
      isActiveCheckboxInstantBook: false,
    });
  };

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Homes</title>
        </Helmet>
        <Filters>
          <div className="container">
            <Dates
              isOpen={this.state.isOpen.dates}
              from={this.state.dateFrom}
              to={this.state.dateTo}
              resetDates={this.handleDaysReset}
              saveDates={this.handleSaveDates}
              toggleVisibility={() => this.handleIsOpen('dates')}
            />

            <Guests
              isOpen={this.state.isOpen.guests}
              guests={this.state.guests}
              decrementGuests={this.decrementGuests}
              incrementGuests={this.incrementGuests}
              handleGuestsClear={this.handleGuestsClear}
              toggleVisibility={() => this.handleIsOpen('guests')}
            />

            <RoomType
              isOpen={this.state.isOpen.roomType}
              roomType={this.state.roomType}
              filterTitle={this.state.roomTypeTitle}
              checkRoomType={this.checkRoomType}
              setFilterTitle={this.setRoomTypeTitle}
              handleRoomTypeClear={this.handleRoomTypeClear}
              toggleVisibility={() => this.handleIsOpen('roomType')}
            />

            <Price
              isHidden
              isOpen={this.state.isOpen.price}
              min={10}
              max={1000}
              price={this.state.price}
              updatePrice={this.updatePrice}
              toggleVisibility={() => this.handleIsOpen('price')}
            />

            <InstantBook
              isHidden
              isOpen={this.state.isOpen.instantBook}
              isActive={this.state.isActiveCheckboxInstantBook}
              toggleVisibility={() => this.handleIsOpen('instantBook')}
              toggleActivity={this.toggleInstantBookActivity}
              reset={this.resetInstantBookFilter}
            />

            <Filter>More filters</Filter>
          </div>
        </Filters>

        <div className="container">
          <Cards>
            <div className="row">
              <div className="col-xs-12 col-lg-8">
                <div className="row">
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img1}
                      price="$82"
                      title="La Salentina, see, nature & relax"
                      type="house"
                      beds="9 beds"
                      superhost="97"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img2}
                      price="$82"
                      title="Your private 3 bedr. riad and exclusi…"
                      type="house"
                      beds="5 beds"
                      superhost="161"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img3}
                      price="$200"
                      title="Dreamy Tropical Tree House"
                      type="treehouse"
                      beds="1 bed"
                      superhost="364"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img4}
                      price="$110"
                      title="Best location old town luxury loft"
                      type="apartment"
                      beds="1 bed"
                      superhost="369"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img5}
                      price="$83"
                      title="Lussuoso. Vista incantevole."
                      type="apartment"
                      beds="6 bed"
                      superhost="105"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 col-lg-6">
                    <Card
                      link="/"
                      image={img6}
                      price="$72"
                      title="In the historical center of Lecce"
                      type="house"
                      beds="3 bed"
                      superhost="221"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Cards>
          <Pagination />
          <Info />
          <Location />
        </div>
        <GoogleMap />
      </Wrapper>
    );
  }
}
