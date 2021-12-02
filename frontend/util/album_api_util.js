//albums#index
export const fetchUserAlbums = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}/albums`
    })
)

//albums#index (not under users)
export const fetchAlbums = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/albums`,
        data: {
            user_id: id
        }
    })
)

//albums#show
export const fetchAlbum = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/albums/${id}`
    })
)

//albums#create
export const createAlbum = (album) => (
    $.ajax({
        method: "POST",
        url: `/api/albums`,
        data: {album}
    })
)

//albums#update
export const updateAlbum = (album) => (
    $.ajax({
        method: "PATCH",
        url: `/api/albums/${album.id}`
    })
)

//albums#destroy
export const deleteAlbum = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/albums/${id}`
    })
)