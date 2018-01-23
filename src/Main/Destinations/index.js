import React from 'react';
import styled from 'styled-components';
import { Slider, Title, SliderArrow } from '../styled';
import Card from './Card';
import img1 from './destinations-1.png';
import img2 from './destinations-2.png';
import img3 from './destinations-3.png';
import img4 from './destinations-4.png';
import img5 from './destinations-5.png';
import img6 from './destinations-6.png';

const Destinations = styled.section`
  position: relative;
`;

const Arrow = SliderArrow.extend`
  top: 9.2rem;
`;

export default () => (
  <Destinations>
    <Title>Featured destinations</Title>
    <Slider>
      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card link="/" image={img1} city="Paris" />
      </div>

      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card link="/" image={img2} city="Miami" />
      </div>

      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card link="/" image={img3} city="Tokyo" />
      </div>

      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card link="/" image={img4} city="Cape town" />
      </div>

      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card link="/" image={img5} city="Seoul" />
      </div>

      <div className="col-xs-4 col-md-3 col-lg-2">
        <Card link="/" image={img6} city="Los Angeles" />
      </div>

      <Arrow />
    </Slider>
  </Destinations>
);
