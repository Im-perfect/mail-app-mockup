import React, { Component } from "react";
import { connect } from "react-redux";
import {
  faUserTie,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAccount } from "../actions/account";

export class Account extends Component {
  state = {
    listOpen: false
  };

  toggleList = () => {
    this.setState({
      listOpen: !this.state.listOpen
    });
  };

  render() {
    const { listOpen } = this.state;
    const { accounts } = this.props;
    const { name, surname } = this.props.currentAccount;
    return (
      <div onClick={this.toggleList} id="account">
        <FontAwesomeIcon icon={faUserTie} size="lg" />
        <div className="dropdown">
          <p>{`${name} ${surname}`}</p>
          <div className="dropdown-arrow">
            {listOpen ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
        </div>
        {listOpen && (
          <ul className="dropdown-list">
            {accounts.map((item, index) => (
              <li
                className="dropdown-list-item"
                key={item.address}
                onClick={() => {
                  this.props.getAccount(index);
                  this.toggleList();
                }}
              >
                {`${item.name} ${item.surname}`}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ accounts, currentAccount }) => ({
  accounts,
  currentAccount
});

const mapDispatchToProps = { getAccount };

export default connect(mapStateToProps, mapDispatchToProps)(Account);
