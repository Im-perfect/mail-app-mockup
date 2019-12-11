import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from "./Account"
import SearchBar from './SearchBar'

export class HeaderBar extends Component {
    render() {
        return (
            <div id="header-bar">
                <SearchBar searchSubject = {this.props.searchSubject}/>
                <Account />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)
