import React from 'react'
import { connect } from 'react-redux'
import Home from './home'

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.currentUserId]
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(Home)