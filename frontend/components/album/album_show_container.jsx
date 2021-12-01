import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show'

const mSTP = (state, ownProps) => {
    let albumId = ownProps.match.params.id;
    let album = state.entities.albums[albumId];
    // let user = album ? (state.entities.users[state.entities.session.currentUserId]) : null
    // let album = Object.values(state.entities.albums[albumId]);
    // let user = state.entities.user;
    return ({
        albumId: albumId,
        album: album,
        photos: Object.values(state.entities.photos),
        // user: user,
        userId: album ? state.entities.albums[albumId].userId : null,
    })
}

const mDTP = (dispatch) => ({
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
})

export default connect(mSTP, mDTP)(AlbumShow)