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
        <ul className="cat">
          <li>
            <FontAwesomeIcon icon={faInbox} />
            Inbox
            <span className="item-count">0</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEdit} />
            Drafts
          </li>
          <li>
            <FontAwesomeIcon icon={faPaperPlane} /> Sent
          </li>
          <li>
            <FontAwesomeIcon icon={faMinusCircle} /> Spam
          </li>
          <li>
            <FontAwesomeIcon icon={faTrashAlt} /> Trash
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
