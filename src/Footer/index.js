import React from 'react';
import styled from 'styled-components';
import { Hr, Nav, Title, Link, Bottom, Copyright, Left, Right } from './styled';
import LanguageForm from './LanguageForm';
import CurrencyForm from './CurrencyForm';
import Logo from './Logo';
import BottomNav from './BottomNav';
import Socials from './Socials';

const Footer = styled.footer`
  flex: 0 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 2.5rem;
  background-color: #fff;
  box-shadow: 0px -0.03rem 0 rgba(72, 72, 72, 0.3);

  @media (min-width: 768px) {
    padding-top: 2.5rem;
    padding-bottom: 2.75rem;
    margin-top: 4rem;
  }
  @media (min-width: 992px) {
    padding-bottom: 2.125rem;
  }
`;

export default () => (
  <Footer>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-3">
          <div className="row">
            <div className="col-xs-6 col-md-12">
              <LanguageForm />
            </div>
            <div className="col-xs-6 col-md-12">
              <CurrencyForm />
            </div>
          </div>
        </div>

        <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
          <Nav>
            <Title>Airbnb</Title>
            <Link href="/">About us</Link>
            <Link href="/">Careers</Link>
            <Link href="/">Press</Link>
            <Link href="/">Policies</Link>
            <Link href="/">Help</Link>
            <Link href="/">Diversity & Belonging</Link>
          </Nav>
        </div>

        <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
          <Nav>
            <Title>Discover</Title>
            <Link href="/">Trust & Safety</Link>
            <Link href="/">Travel Credit</Link>
            <Link href="/">Gift Cards</Link>
            <Link href="/">Airbnb Citizen</Link>
            <Link href="/">Business Travel</Link>
            <Link href="/">Guidebooks</Link>
            <Link href="/">Airbnbmag</Link>
          </Nav>
        </div>

        <div className="hidden-xs hidden-sm col-md-offset-1 col-md-2">
          <Nav>
            <Title>Hosting</Title>
            <Link href="/">Why Host</Link>
            <Link href="/">Hospitality</Link>
            <Link href="/">Responsible Hosting</Link>
            <Link href="/">Community Center</Link>
          </Nav>
        </div>
      </div>

      <Hr />

      <Bottom>
        <Left>
          <Logo />
          <Copyright>© Airbnb Inc.</Copyright>
        </Left>
        <Right>
          <BottomNav />
          <Socials />
        </Right>
      </Bottom>
    </div>
  </Footer>
);
