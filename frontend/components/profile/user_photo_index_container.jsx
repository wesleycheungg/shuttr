import React from 'react'
import { connect } from 'react-redux'
import UserPhotoIndex from './user_photo_index'

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.id
    
})

const mDTP = (dispatch) => ({

})

export default connect(mSTP, mDTP)(UserPhotoIndex)