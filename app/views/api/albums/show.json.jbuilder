json.album do
  json.extract! @album, :id, :title, :description, :user_id
end

json.user do
  json.extract! @user, :id, :full_name
end

json.photos do
    @photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :user_id
      json.photoUrl url_for(photo.photo)
    end
  end
end