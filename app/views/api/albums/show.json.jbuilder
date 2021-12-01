json.album do
  json.extract! @album, :id, :title, :description, :user_id
end

json.user do
  json.extract! @user, :id, :full_name
end

@photos.each do |photo|
  json.photos do
    json.set! photo.id do
      json.extract! photo, :id, :title, :description, :user_id
      json.photoUrl url_for(photo.photo)
    end
  end
end