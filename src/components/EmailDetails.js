import React, { Component } from "react";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDate } from "../actions/helper";

export class EmailContent extends Component {
  render() {
    const { subject, date, content } = this.props.email;
    const senderName = this.props.email["sender name"];
    const { surname, name } = this.props.currentAccount;
    return (
      <div>
        <div>
          <h3>{subject}</h3>
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
  }
}

const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmailContent);
