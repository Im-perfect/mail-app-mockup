import React, { Component } from "react";
import { connect } from "react-redux";
import {
  faInbox,
  faEdit,
  faPaperPlane,
  faMinusCircle,
  faTrashAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SideBar extends Component {
  state = {
    selected: "inbox"
  };

  sideBarSelect = selection => {
    this.setState({
      selected: selection
    });
  };

  render() {
    return (
      <div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> Mail
        </div>
        <div className="compose">
          <button href="#" className="button compose">
            Compose
          </button>
        </div>
        <ul className="category">
          <li name="inbox" onClick={() => this.sideBarSelect("inbox")}>
            <FontAwesomeIcon icon={faInbox} />
            Inbox
            <span className="count">
              {this.props.currentAccount.mail.filter(mail => mail.read==="false").length}
            </span>
          </li>
          <li name="draft" onClick={() => this.sideBarSelect("drafts")}>
            <FontAwesomeIcon icon={faEdit} />
            Drafts
          </li>
          <li name="sent" onClick={() => this.sideBarSelect("sent")}>
            <FontAwesomeIcon icon={faPaperPlane} /> Sent
          </li>
          <li name="spam" onClick={() => this.sideBarSelect("spam")}>
            <FontAwesomeIcon icon={faMinusCircle} /> Spam
          </li>
          <li name="trash" onClick={() => this.sideBarSelect("trash")}>
            <FontAwesomeIcon icon={faTrashAlt} /> Trash
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ currentAccount }) => ({
  currentAccount
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
