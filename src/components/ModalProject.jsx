import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "../style/modal.css";

export default class ModalProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    const modal = (
      <div className="modal-content">
        <h1 className="title-box">
          {this.props.info.name}
          <span>
            <a
              href="javascript:void(0);"
              onClick={() => this.closeModal()}
              className="cerrar-modal-btn hover-modal after-modal"
            >
              X
            </a>
          </span>
        </h1>
        <div className="modal-content info-box">
          <p>{this.props.info.description}</p>
          <table className="row my-row table-and-icons-in-modal">
          <tr className="my-table-row">
              <td className="title-features">Features:</td>
              <td className="td-description-modal">{this.props.info.features}</td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">Stack:</td>
              <td className="td-description-modal">{this.props.info.stack}</td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">Role:</td>
              <td className="td-description-modal"> {this.props.info.role}</td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">Platforms:</td>
              <td className="td-description-modal"> {this.props.info.platform} </td>
            </tr>
            <tr>
              <td className="title-features">Dev Time:</td>
              <td className="td-description-modal"> {this.props.info.time}</td>
            </tr>
          </table>
          <table className="modal-content redes-box">
            <tr>
              <td className="icon-at-modal-col">
                <a
                  className="icon-a-modal hover-modal after-modal"
                  target="_blank"
                  href={this.props.info.website}
                >
                  <i className="fas fa-link fa-2x" />
                  Demo
                </a>
              </td>
              <td className="icon-at-modal-col">
                <a
                  className="icon-a-modal hover-modal after-modal "
                  target="_blank"
                  href={this.props.info.github}
                >
                  <i className="fab fa-github fa-2x" />
                  Code
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
    return (
      <section>
        <input
          className="modal-button hover-modal after-modal"
          type="button"
          value="view more"
          onClick={() => this.openModal()}
        />
        <Modal
          visible={this.state.visible}
          height="80%"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          {modal}
        </Modal>
      </section>
    );
  }
}
