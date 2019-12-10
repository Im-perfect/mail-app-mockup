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
      <div>
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
                .deleteEmail(this.props.checked)
                .then(() => this.props.updateList());
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

const mapStateToProps = state => ({});

const mapDispatchToProps = { deleteEmail };

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
