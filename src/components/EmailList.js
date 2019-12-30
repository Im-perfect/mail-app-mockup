import React, { Component } from "react";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setEmailRead } from "../actions/email";
import { getDate } from "../actions/helper";

export class EmailList extends Component {
  render() {
    return (
      <div id="email-list-container">
        <ul className="email-list">
          {this.props.emails.map((mail, index) => {
            return (
              <li key={mail.date}  className={this.props.emailIndex===index?"active":null}
              >
                <input
                  type="checkbox"
                  name="email"
                  onChange={() => this.props.toggleCheck(index)}
                  checked={this.props.checked[index]}
                ></input>
                <div
                  className={`email-list-item-main ${
                    mail.read === "false" ? "unread" : null
                  }`}
                  onClick={() => {
                    this.props.setEmailRead(
                      this.props.currentAccount.address,
                      mail.date
                    );
                    this.props.selectEmail(index);
                  }}
                >
                  <div>
                    <p>{mail.subject}</p>
                    <span>{mail["sender name"]}</span>
                  </div>
                  <div className="email-list-item-right">
                    <p>{getDate(mail.date)}</p>
                    <FontAwesomeIcon icon={faStar} />
                  </div>
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
