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
          <p className="info-box-p">{this.props.info.description}</p>
          <table className="row my-row table-and-icons-in-modal">
            <tr className="my-table-row">
              <td className="title-features">Features:</td>
              <td className="td-description-modal">
                {this.props.info.features}
              </td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">Stack:</td>
              <td className="td-description-modal">{this.props.info.stack}</td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">My Role:</td>
              <td className="td-description-modal"> {this.props.info.role}</td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">Platforms:</td>
              <td className="td-description-modal">
                {" "}
                {this.props.info.platform}{" "}
              </td>
            </tr>
            <tr className="my-table-row">
              <td className="title-features">Dev Time:</td>
              <td className="td-description-modal"> {this.props.info.time}</td>
            </tr>
            <tr>
              <td className="title-features">Num of Developers:</td>
              <td className="td-description-modal"> {this.props.info.devNum}</td>
            </tr>
          </table>
        </div>
        <section className="section-link-modal">
          <button className="modal-button hover-modal after-modal link-modal">
            <a
              className="icon-a-modal hover-modal after-modal"
              target="_blank"
              href={this.props.info.website}
            >
              demo
            </a>
          </button>
          <button className="modal-button hover-modal after-modal link-modal">
            <a
              className="icon-a-modal hover-modal after-modal "
              target="_blank"
              href={this.props.info.github}
            >
              code
            </a>
          </button>
        </section>
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
