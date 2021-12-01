import React from 'react';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom';
import AlbumForm from './album_form';

import { createAlbum } from '../../actions/album_actions';
import { fetchAllPhotos } from '../../actions/photos_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    photos: Object.values(state.entities.photos),
    album: {
        title: "",
        description: ""
    }
})

const mDTP = (dispatch) => ({
    createAlbum: (album) => dispatch(createAlbum(album)),
    fetchAllPhotos: () => dispatch(fetchAllPhotos())
})

export default connect(mSTP, mDTP)(AlbumForm)