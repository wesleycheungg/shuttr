export const createTag = (tag) => (
    $.ajax({
        method: "POST",
        url: `api/photos/${tag.photo_id}/tags`,
        data: {tag}
    })
)