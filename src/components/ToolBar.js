import React, { Component } from "react";
import { connect } from "react-redux";
import {
    faEyeSlash,
    faTrashAlt,
    faMinusCircle
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ToolBar extends Component {
    toggleCheckAll = () => {

    }
  render() {
    return (
      <div>
        <input type="checkbox" onClick={this.toggleCheckAll} />
        <div>
            <button onClick={this.deleteEmail}><FontAwesomeIcon icon={faEyeSlash} /></button>
            <button><FontAwesomeIcon icon={faTrashAlt} /></button>
            <button><FontAwesomeIcon icon={faMinusCircle} /></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
