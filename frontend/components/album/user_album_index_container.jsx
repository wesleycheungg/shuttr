import React from 'react';
import { connect } from 'react-redux'
import { fetchUserAlbums, fetchAlbums } from '../../actions/album_actions';
import UserAlbumIndex from './user_album_index';

const mSTP = (state, ownProps) => ({
    userId: ownProps.match.params.id,
    albums: Object.values(state.entities.albums)
    // currentUser: state.entities.users[userId],
    // albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id]),
})

const mDTP = (dispatch) => ({
    // fetchAlbums: (id) => dispatch(fetchAlbums(id))
    fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId))
})

export default connect(mSTP, mDTP)(UserAlbumIndex)

