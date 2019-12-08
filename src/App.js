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
    selectedEmail: this.props.currentAccount.mail[0]
  };

  selectEmail = date => {
    this.setState({
      selectedEmail: this.props.currentAccount.mail.find(
        mail => mail.date === date
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
            <HeaderBar />
            <div className="wrapper">
              <EmailList selectEmail={this.selectEmail} />
              <EmailDetails email={this.state.selectedEmail} />
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
