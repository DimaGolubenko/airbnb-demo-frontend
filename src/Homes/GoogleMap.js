import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.section`
  display: none;
  box-sizing: border-box;

  @media (min-width: 992px) {
    display: block;
    position: fixed;
    top: 8.5rem;
    right: 0;
    bottom: 0;
    width: 33%;
  }
`;

const Place = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: orange;
`;

class GoogleMap extends React.Component {
  static defaultProps = {
    center: [48.239811, 16.375931],
    zoom: 1,
  };

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          <Place lat={49.140886} lng={16.055954} />
          <Place lat={48.72227} lng={15.792282} />
        </GoogleMapReact>
      </Wrapper>
    );
  }
}

export default GoogleMap;
