//photos#index
export const fetchAllPhotos = () => (
    $.ajax({
        method: "GET",
        url: "/api/photos"
    })
)

//photos#show
export const fetchPhoto = (id) => (
    $.ajax({
        method: "GET",
        url: `/api/photos/${id}`
    })
)

//photos#create
export const createPhoto = (photo) => (
    $.ajax({
        method: "POST",
        url: `/api/photos`,
        data: photo,
        processData: false,
        contentType: false
    })
)

//photos#destroy
export const deletePhoto = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/photos/${id}`
    })
)