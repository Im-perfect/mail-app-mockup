import React, { Component } from 'react'
import { connect } from 'react-redux'
import Account from "./Account"

export class HeaderBar extends Component {
    render() {
        return (
            <div>
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
