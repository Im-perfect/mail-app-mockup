import React, { Component } from "react";
import { connect } from "react-redux";
import EmailList from "./EmailList";
import EmailDetails from "./EmailDetails";
import ToolBar from "./ToolBar";

export class EmailDetailsContainer extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <div>
          <EmailList
            emails={this.props.emails}
            selectEmail={this.props.selectEmail}
            searchTerm={this.props.searchTerm}
          />
          <EmailDetails
            emails={this.props.emails}
            emailIndex={this.props.emailIndex}
            selectPrevious={this.props.selectPrevious}
            selectNext={this.props.selectNext}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailDetailsContainer);
