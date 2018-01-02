import React from "react";
import styled from "styled-components";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

const Socials = styled.div`
  display: inline-block;
`;

const Icon = styled.a`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.75rem;
  background-size: cover;
`;

const Facebook = Icon.extend`
  background-image: url(${facebook});
`;

const Twitter = Icon.extend`
  background-image: url(${twitter});
`;

const Instagram = Icon.extend`
  background-image: url(${instagram});
`;

export default () => {
  return (
    <Socials>
      <Facebook href="/" />
      <Twitter href="/" />
      <Instagram href="/" />
    </Socials>
  );
};
