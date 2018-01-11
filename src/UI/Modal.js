import React from "react";
import ReactDOM from "react-dom";

const modal = document.getElementById("modal");

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modal.appendChild(this.el);
  }

  componentWillUnmount() {
    modal.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
