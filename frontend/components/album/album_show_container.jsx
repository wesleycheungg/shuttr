import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchAlbumPhotos } from '../../actions/photos_actions'
import AlbumShow from './album_show'

const mSTP = (state, ownProps) => {
    let albumId = ownProps.match.params.id;
    let album = state.entities.albums[albumId];
    let user = album ? (state.entities.users[state.session.currentUserId]) : null
    // let album = Object.values(state.entities.albums[albumId]);
    // let user = state.entities.user;
    return ({
        albumId: albumId,
        album: album,
        photos: Object.values(state.entities.photos),
        user: user,
        userId: album ? state.entities.albums[albumId].userId : null,
    })
}

const mDTP = (dispatch) => ({
        fetchAlbum: (id) => dispatch(fetchAlbum(id)),
        fetchAlbumPhotos: (userId, albumId) => dispatch(fetchAlbumPhotos(userId, albumId))
})


export default connect(mSTP, mDTP)(AlbumShow)