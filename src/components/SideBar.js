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
          <li name="inbox" onClick={() => this.props.sideBarSelect("inbox")}>
            <FontAwesomeIcon icon={faInbox} />
            Inbox
            <span className="count">
              {this.props.currentAccount.mail.filter(
                mail => mail.category === "inbox" && mail.read === "false"
              ).length || null}
            </span>
          </li>
          <li name="draft" onClick={() => this.props.sideBarSelect("drafts")}>
            <FontAwesomeIcon icon={faEdit} />
            Drafts
          </li>
          <li name="sent" onClick={() => this.props.sideBarSelect("sent")}>
            <FontAwesomeIcon icon={faPaperPlane} /> Sent
          </li>
          <li name="spam" onClick={() => this.props.sideBarSelect("spam")}>
            <FontAwesomeIcon icon={faMinusCircle} /> Spam
          </li>
          <li name="trash" onClick={() => this.props.sideBarSelect("trash")}>
            <FontAwesomeIcon icon={faTrashAlt} /> Trash
            <span className="count">
              {this.props.currentAccount.mail.filter(
                mail => mail.category === "trash" && mail.read === "false"
              ).length || null}
            </span>
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
