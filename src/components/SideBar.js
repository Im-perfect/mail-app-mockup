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
  getCount = selection => {
    const count = this.props.currentAccount.mail.filter(
      mail => mail.category === selection && mail.read === "false"
    ).length;
    return count ? `(${count})` : null;
  };
  render() {
    return (
      <div>
        <div id="logo">
          <FontAwesomeIcon icon={faEnvelope} /> Mail
        </div>
        <div>
          <button href="#" className="button compose">
            Compose
          </button>
        </div>
        <ul className="category">
          <li
            name="inbox"
            onClick={() => this.props.sideBarSelect("inbox")}
            className={
              this.props.currentSelection === "inbox" ? "active" : null
            }
          >
            <FontAwesomeIcon icon={faInbox} />
            Inbox
            <span className="count">{this.getCount("inbox")}</span>
          </li>
          <li
            name="draft"
            onClick={() => this.props.sideBarSelect("drafts")}
            className={
              this.props.currentSelection === "drafts" ? "active" : null
            }
          >
            <FontAwesomeIcon icon={faEdit} />
            Drafts
          </li>
          <li
            name="sent"
            onClick={() => this.props.sideBarSelect("sent")}
            className={this.props.currentSelection === "sent" ? "active" : null}
          >
            <FontAwesomeIcon icon={faPaperPlane} /> Sent
          </li>
          <li
            name="spam"
            onClick={() => this.props.sideBarSelect("spam")}
            className={this.props.currentSelection === "spam" ? "active" : null}
          >
            <FontAwesomeIcon icon={faMinusCircle} /> Spam
          </li>
          <li
            name="trash"
            onClick={() => this.props.sideBarSelect("trash")}
            className={
              this.props.currentSelection === "trash" ? "active" : null
            }
          >
            <FontAwesomeIcon icon={faTrashAlt} /> Trash
            <span className="count">{this.getCount("trash")}</span>
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
