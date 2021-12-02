export const fetchPhotoComments = (photoId) => (
    $.ajax({
        method: "GET",
        url: `/api/photos/${photoId}/comments`
    })
);

export const fetchComment = (commentId) => (
    $.ajax({
        method: "GET",
        url: `/api/comments/${commentId}`,
        data: {commentId}
    })
);

export const createComment = (comment, photoId) => (
    $.ajax({
        method: "POST",
        url: `/api/photos/${photoId}/comments`,
        data: {comment}
    })
);

export const updateComment = (comment) => (
    $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: {comment}
    })
);

export const deleteComment = (commentId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
);