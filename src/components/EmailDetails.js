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
        <div id="email-detail" className="is-flex-column">
          <div className="email-detail-header">
            <h3>{subject}</h3>
            <div className="button-group">
              <button onClick={this.props.selectPrevious}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={this.props.selectNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <div className="email-content">
            <div className="email-info-header">
              <table>
              <tbody>
                <tr>
                  <th>From:</th>
                  <td>{senderName}</td>
                </tr>
                <tr>
                  <th>To:</th>
                  <td>{`${name} ${surname}`}</td>
                </tr>
                </tbody>
              </table>

              <div className="email-info-header-right">
                <p>{getDate(date)}</p>
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
            <p className="email-content-detail">{content}</p>
          </div>
        </div>
      );
    } else {
      return <div id="email-detail">No content</div>;
    }
  }
}

const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmailDetails);
