json.albums do
    @albums.each do |album|
        json.set! album.id do 
            json.extract! album, :id, :user_id, :title, :description
        end
    end
end

json.users do
  json.extract! user, :id, :username, :full_name
end