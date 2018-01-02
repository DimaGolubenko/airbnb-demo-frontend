import React from "react";
import styled from "styled-components";
import {
  Hr,
  Nav,
  Title,
  List,
  Item,
  Link,
  Bottom,
  Copyright,
  Left,
  Right
} from "./styled";
import LanguageForm from "./LanguageForm";
import CurrencyForm from "./CurrencyForm";
import Logo from "./Logo";
import BottomNav from "./BottomNav";
import Socials from "./Socials";

const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  height: 25rem;
  padding-top: 3rem;
  background-color: #fff;
  box-shadow: 0px -0.03rem 0 rgba(72, 72, 72, 0.3);
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <LanguageForm />
            <CurrencyForm />
          </div>

          <div className="col-lg-offset-1 col-lg-2">
            <Nav>
              <Title>Airbnb</Title>
              <List>
                <Item>
                  <Link href="/">About us</Link>
                </Item>
                <Item>
                  <Link href="/">Careers</Link>
                </Item>
                <Item>
                  <Link href="/">Press</Link>
                </Item>
                <Item>
                  <Link href="/">Policies</Link>
                </Item>
                <Item>
                  <Link href="/">Help</Link>
                </Item>
                <Item>
                  <Link href="/">Diversity & Belonging</Link>
                </Item>
              </List>
            </Nav>
          </div>

          <div className="col-lg-offset-1 col-lg-2">
            <Nav>
              <Title>Discover</Title>
              <List>
                <Item>
                  <Link href="/">Trust & Safety</Link>
                </Item>
                <Item>
                  <Link href="/">Travel Credit</Link>
                </Item>
                <Item>
                  <Link href="/">Gift Cards</Link>
                </Item>
                <Item>
                  <Link href="/">Airbnb Citizen</Link>
                </Item>
                <Item>
                  <Link href="/">Business Travel</Link>
                </Item>
                <Item>
                  <Link href="/">Guidebooks</Link>
                </Item>
                <Item>
                  <Link href="/">Airbnbmag</Link>
                </Item>
              </List>
            </Nav>
          </div>

          <div className="col-lg-offset-1 col-lg-2">
            <Nav>
              <Title>Hosting</Title>
              <List>
                <Item>
                  <Link href="/">Why Host</Link>
                </Item>
                <Item>
                  <Link href="/">Hospitality</Link>
                </Item>
                <Item>
                  <Link href="/">Responsible Hosting</Link>
                </Item>
                <Item>
                  <Link href="/">Community Center</Link>
                </Item>
              </List>
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
};
