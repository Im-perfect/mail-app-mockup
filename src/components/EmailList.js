import React, { Component } from "react";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setEmailRead } from "../actions/email";
import {getDate} from '../actions/helper'

export class EmailList extends Component {

  render() {
    return (
      <div id="email-list">
        <ul>
          {this.props.currentAccount.mail.map(mail => {
            return (
              <li key={mail.date}>
                <input type="checkbox"></input>
                <div onClick={() => {this.props.setEmailRead(mail.date);this.props.selectEmail(mail.date)}}>
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
