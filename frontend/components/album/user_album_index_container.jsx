import React from 'react';
import { connect } from 'react-redux'
import { fetchUserAlbums, fetchAlbums } from '../../actions/album_actions';
import { fetchAlbumPhotos } from '../../actions/photos_actions'
import UserAlbumIndex from './user_album_index';

const mSTP = (state, ownProps) => ({
    userId: state.session.currentUserId,
    albums: Object.values(state.entities.albums),
    // albumId: ownProps.match.params.id
    currentUser: state.entities.users[state.session.currentUserId],
    // albums: Object.keys(state.entities.albums).map(id => state.entities.albums[id]),
})

const mDTP = (dispatch) => ({
    // fetchAlbumPhotos: (userId, albumId) => dispatch(fetchAlbumPhotos(userId, albumId)),
    fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId))
})

export default connect(mSTP, mDTP)(UserAlbumIndex)

