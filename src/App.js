import React from "react";
import "./App.css";
import "./css/main.css"
import SideBar from "./components/SideBar";
import EmailList from "./components/EmailList";
import HeaderBar from "./components/HeaderBar";
import EmailDetails from "./components/EmailDetails";

function App() {
  return (
    <div>
      <div id="side-bar">
        <SideBar />
      </div>
      <div id="mailbox-container">
        <div>
          <HeaderBar />
          <EmailList />
          <EmailDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
