import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal from "./Modal";

const appRoot = document.getElementById("root");

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 0.0625rem solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0 0.125rem 0.25rem rgba(72, 72, 72, 0.08);
  border-radius: 0.25rem;
  z-index: 3;
`;

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal>
        <Wrapper>{this.props.children}</Wrapper>
      </Modal>
    );
  }
}

ReactDOM.render(<Popup />, appRoot);
