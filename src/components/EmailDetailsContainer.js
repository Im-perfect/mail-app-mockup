import React, { Component } from "react";
import { connect } from "react-redux";
import EmailList from "./EmailList";
import EmailDetails from "./EmailDetails";
import ToolBar from "./ToolBar";

export class EmailDetailsContainer extends Component {
  state = {
    checkedAll: false,
    checked: this.props.emails.map(checked => false)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.emails.map(checked => false) });
  }

  toggleCheck = checkedIndex => {
    //all checked
    if (this.state.checked.indexOf(false) === -1) {
      this.setState({
        checkedAll: false,
        checked: this.state.checked.map((checked, index) =>
          checkedIndex === index ? !checked : checked
        )
      });
    }
    //one unchecked, check that one
    else if (
      this.state.checked.filter(checked => !checked).length === 1 &&
      this.state.checked.indexOf(false) === checkedIndex
    ) {
      this.setState({
        checkedAll: true,
        checked: this.state.checked.map((checked, index) =>
          checkedIndex === index ? !checked : checked
        )
      });
    } else {
      this.setState({
        checked: this.state.checked.map((checked, index) =>
          checkedIndex === index ? !checked : checked
        )
      });
    }
  };

  toggleCheckAll = () => {
    if (!this.state.checkedAll) {
      this.setState({
        checkedAll: true,
        checked: this.state.checked.map(checked => true)
      });
    } else {
      this.setState({
        checkedAll: false,
        checked: this.state.checked.map(checked => false)
      });
    }
  };

  resetCheck = () => {
    this.setState({
      checkedAll: false,
      checked: this.props.emails.map(checked => false)
    });
  };

  render() {
    return (
      <div>
        <ToolBar
          toggleCheckAll={this.toggleCheckAll}
          checkedAll={this.state.checkedAll}
          checked={this.state.checked}
          resetCheck={this.resetCheck}
          emails={this.props.emails}
        />
        <div id="email-detail-container">
          <EmailList
            emails={this.props.emails}
            selectEmail={this.props.selectEmail}
            searchTerm={this.props.searchTerm}
            checked={this.state.checked}
            toggleCheck={this.toggleCheck}
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
