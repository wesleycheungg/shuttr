import * as PhotoAPIUtil from '../util/photo_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS"
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'
export const REMOVE_PHOTO = 'REMOVE_PHOTO'

const receiveAllPhotos = (photos) => ({
    type: RECEIVE_ALL_PHOTOS,
    photos
})

const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
})

const removePhoto = (photoId) => ({
    type: REMOVE_PHOTO,
    photoId
})


export const fetchAllPhotos = () => (dispatch) => {
    return PhotoAPIUtil.fetchAllPhotos()
        .then(() => dispatch(receiveAllPhotos()))
} 

export const fetchPhoto = (photo) => (dispatch) => {
    return PhotoAPIUtil.fetchPhoto(photo)
        .then((photo) => receivePhoto(photo))
}

export const createPhoto = (photo) => (dispatch) => {
    return PhotoAPIUtil.createPhoto(photo)
        .then((createP) => receivePhoto(createP))
}

export const deletePhoto = (id) => (dispatch) => {
    return PhotoAPIUtil.deletePhoto(id)
        .then(() => dispatch(removePhoto(photoId)))
}