import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "./css/main.css";
import SideBar from "./components/SideBar";
import HeaderBar from "./components/HeaderBar";
import EmailDetailsContainer from "./components/EmailDetailsContainer";
import { getAccount } from "./actions/account";

class App extends React.Component {
  state = {
    selectedEmailIndex: 0,
    searchTerm: "",
    currentSelection: "inbox"
  };

  componentDidMount = () => {
    this.props.getAccount(0);
  };

  sideBarSelect = selection => {
    this.setState({
      currentSelection: selection,
      emails: this.props.currentAccount.mail.filter(
        mail => mail.category === selection
      )
    });
  };

  selectEmail = index => {
    this.setState({
      selectedEmailIndex: index
    });
  };

  selectPrevious = () => {
    if (this.state.selectedEmailIndex > 0)
      this.setState({
        selectedEmailIndex: this.state.selectedEmailIndex - 1
      });
  };

  selectNext = () => {
    if (
      this.state.selectedEmailIndex <
      this.props.currentAccount.mail.filter(
        mail =>
          mail.category === this.state.currentSelection &&
          mail.subject
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
      ).length -
        1
    )
      this.setState({
        selectedEmailIndex: this.state.selectedEmailIndex + 1
      });
  };

  searchSubject = term => {
    this.setState({
      searchTerm: term
    });
  };

  render() {
    if (!this.props.currentAccount) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div id="side-bar">
          <SideBar
            emails={this.props.currentAccount.mail.filter(
              mail =>
                mail.category === this.state.currentSelection &&
                mail.subject
                  .toLowerCase()
                  .includes(this.state.searchTerm.toLowerCase())
            )}
            sideBarSelect={this.sideBarSelect}
            currentSelection={this.state.currentSelection}
          />
        </div>
        <div id="mailbox-container">
            <HeaderBar searchSubject={this.searchSubject} />
              <EmailDetailsContainer
                emails={this.props.currentAccount.mail.filter(
                  mail =>
                    mail.category === this.state.currentSelection &&
                    mail.subject
                      .toLowerCase()
                      .includes(this.state.searchTerm.toLowerCase())
                )}
                searchTerm={this.state.searchTerm}
                emailIndex={this.state.selectedEmailIndex}
                selectEmail={this.selectEmail}
                selectPrevious={this.selectPrevious}
                selectNext={this.selectNext}
              />
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = { getAccount };

export default connect(mapStateToProps, mapDispatchToProps)(App);
