import React, { Component } from "react";
import { connect } from "react-redux";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class EmailList extends Component {
  getDate = timeStamp => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

    const now = new Date();
    const time = new Date(timeStamp * 1000);
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    if (year !== now.getFullYear) {
      return `${months[month]} ${date}, ${year}`;
    } else if (month === now.getMonth() && date === now.getDate()) {
      if (hours < 12) return `${hours}:${minutes} AM`;
      else return `${hours - 12}:${minutes} PM`;
    } else {
      return `${months[month]} ${date}`;
    }
  };

  setEmailRead = (index) =>{
      
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.currentAccount.mail.map((mail,index) => {
            return (
              <li key={mail.date}>
                <input type="checkbox"></input>
                <div onClick={()=>this.setEmailRead(index)}>
                  <div>
                    <h5>{mail.subject}</h5>
                    <p>{mail["sender name"]}</p>
                  </div>
                  <div>{this.getDate(mail.date)}</div>
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EmailList);
