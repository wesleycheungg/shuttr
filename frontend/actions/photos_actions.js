import * as PhotoAPIUtil from '../util/photo_api_util'

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS"
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO'
export const REMOVE_PHOTO = 'REMOVE_PHOTO'
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS'

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

const receivePhotoErrors = (errors) => ({
    type: RECEIVE_PHOTO_ERRORS,
    errors
})


export const fetchAllPhotos = () => (dispatch) => {
    return PhotoAPIUtil.fetchAllPhotos()
        .then((photos) => dispatch(receiveAllPhotos(photos)),
            errors => dispatch(receivePhotoErrors(errors.responseJSON)))
} 

export const fetchPhoto = (id) => (dispatch) => {
    return PhotoAPIUtil.fetchPhoto(id)
        .then((photo) => dispatch(receivePhoto(photo)),
            errors => dispatch(receivePhotoErrors(errors.responseJSON)))
}

export const createPhoto = (photo) => (dispatch) => {
    return PhotoAPIUtil.createPhoto(photo)
        .then((createP) => dispatch(receivePhoto(createP)),
            errors => dispatch(receivePhotoErrors(errors.responseJSON)))
}

export const deletePhoto = (id) => (dispatch) => {
    return PhotoAPIUtil.deletePhoto(id)
        .then(() => dispatch(removePhoto(photoId)))
}