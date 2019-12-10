import React from "react";
import { connect } from "react-redux";
import "./App.css";
import "./css/main.css";
import SideBar from "./components/SideBar";
import EmailList from "./components/EmailList";
import HeaderBar from "./components/HeaderBar";
import EmailDetails from "./components/EmailDetails";

class App extends React.Component {
  state = {
    selectedEmailIndex: 0,
    searchTerm: "",
    emails: this.props.currentAccount.mail
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
      this.state.emails.length - 1
    )
      this.setState({
        selectedEmailIndex: this.state.selectedEmailIndex + 1
      });
  };

  searchSubject = term => {
    this.setState({
      searchTerm: term,
      emails: this.props.currentAccount.mail.filter(mail =>
        mail.subject.toLowerCase().includes(term.toLowerCase())
      )
    });
  };

  render() {
    return (
      <div>
        <div id="side-bar">
          <SideBar />
        </div>
        <div id="mailbox-container">
          <div>
            <HeaderBar searchSubject={this.searchSubject} />
            <div className="wrapper">
              <EmailList
                emails={this.state.emails}
                selectEmail={this.selectEmail}
                searchTerm={this.state.searchTerm}
              />
              <EmailDetails
                emails={this.state.emails}
                emailIndex={this.state.selectedEmailIndex}
                selectPrevious={this.selectPrevious}
                selectNext={this.selectNext}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ currentAccount }) => ({ currentAccount });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
