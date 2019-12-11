import React, { Component } from "react";
import { connect } from "react-redux";
import {
  faEyeSlash,
  faTrashAlt,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteEmail } from "../actions/email";

export class ToolBar extends Component {
  render() {
    return (
      <div id="tool-bar">
        <input
          type="checkbox"
          onChange={this.props.toggleCheckAll}
          checked={this.props.checkedAll}
        />
        <div>
          <button>
            <FontAwesomeIcon icon={faEyeSlash} />
          </button>
          <button
            onClick={() => {
              this.props
                .deleteEmail(
                  this.props.currentAccount.address,
                  this.props.emails.filter(
                    (email, index) => this.props.checked[index]
                  )
                )
                .then(() => this.props.resetCheck());
            }}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button>
            <FontAwesomeIcon icon={faMinusCircle} />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = { deleteEmail };

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
