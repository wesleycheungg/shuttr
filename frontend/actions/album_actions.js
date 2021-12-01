import * as AlbumAPIUtil from '../util/album_api_util';

//test
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'

const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
})

export const fetchAlbums = (id) => (dispatch) => {
    return AlbumAPIUtil.fetchAlbums(id)
        .then(
            (albums) => dispatch(receiveAlbums(albums))
        )
}



export const RECEIVE_USER_ALBUMS = 'RECEIVE_USER_ALBUMS'
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'
export const REMOVE_ALBUM = 'REMOVE_ALBUM'

const receiveUserAlbums = ({ albums, users}) => ({
    type: RECEIVE_USER_ALBUMS,
    albums: albums,
    users, users
})

const receiveAlbum = ({ album, user, photos }) => ({
    type: RECEIVE_USER_ALBUMS,
    album: album,
    user, user,
    photos: photos
})

const removeAlbum = (albumId) => ({
    type: REMOVE_ALBUM,
    albumId
})

export const fetchUserAlbums = (userId) => (dispatch) => {
    return AlbumAPIUtil.fetchUserAlbums(userId)
        .then(
            (albums) => (dispatch(receiveUserAlbums(albums)))
        )
}

export const fetchAlbum = (id) => (dispatch) => {
    return AlbumAPIUtil.fetchAlbum(id)
        .then(
            (album) => (dispatch(receiveAlbum(album)))
        )
}

export const createAlbum = (album) => (dispatch) => {
    return AlbumAPIUtil.createAlbum(album)
        .then(
            (album) => (dispatch(receiveAlbum(album)))
        )
}

export const deleteAlbum = (id) => (dispatch) => {
    return AlbumAPIUtil.deleteAlbum(id)
        .then(
            (id) => (dispatch(removeAlbum(id)))
        )
}