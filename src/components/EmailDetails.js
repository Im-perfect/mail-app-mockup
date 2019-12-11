import React, { Component } from "react";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDate } from "../actions/helper";

export class EmailDetails extends Component {
  render() {
    if (this.props.emails.length) {
      const { subject, date, content } = this.props.emails[
        this.props.emailIndex
      ];
      const senderName = this.props.emails[this.props.emailIndex][
        "sender name"
      ];
      const { surname, name } = this.props.currentAccount;
      return (
        <div>
          <div>
            <h3>{subject}</h3>
            <div>
              <button onClick={this.props.selectPrevious}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={this.props.selectNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div>
            <p>From: {senderName}</p>
            <p>To: {`${name} ${surname}`}</p>
            <p>{getDate(date)}</p>
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div>{content}</div>
        </div>
      );
    } else {
      return <div>No content</div>;
    }
  }
}

const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmailDetails);
