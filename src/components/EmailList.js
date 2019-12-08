import React, { Component } from "react";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setEmailRead } from "../actions/email";
import { getDate } from "../actions/helper";

export class EmailList extends Component {
  render() {
    const emails = this.props.currentAccount.mail.filter(mail =>
      mail.subject.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    );
    return (
      <div id="email-list">
        <ul>
          {emails.map((mail, index) => {
            return (
              <li key={mail.date}>
                <input type="checkbox"></input>
                <div
                  onClick={() => {
                    this.props.setEmailRead(mail.date);
                    this.props.selectEmail(index);
                  }}
                >
                  <div>
                    <h5>{mail.subject}</h5>
                    <p>{mail["sender name"]}</p>
                  </div>
                  <div>{getDate(mail.date)}</div>
                </div>

                <div>
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = { setEmailRead };

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
