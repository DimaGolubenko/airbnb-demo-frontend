import React from "react";
import styled from "styled-components";
import { Portal as ReactPortal } from "react-portal";

const Portal = styled(ReactPortal)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const Popup = styled.div`
  position: ${props => (props.fixed ? "fixed" : "absolute")};
  bottom: ${props => (props.fixed ? "0" : "auto")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  border: 0.0625rem solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;
  z-index: 3;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Modal = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0.8;
`;

const Dropdown = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    margin-top: 0.5rem;
    left: 0;
    background-color: #fff;
    border: 1px solid rgba(72, 72, 72, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
    border-radius: 4px;
  }
`;

export default props => {
  return (
    <React.Fragment>
      <Modal>
        <Overlay onClick={props.handleIsOpen} />
        <Dropdown>{props.children}</Dropdown>
      </Modal>
      <Portal>
        <Popup fixed={props.isFixed}>{props.children}</Popup>
      </Portal>
    </React.Fragment>
  );
};
