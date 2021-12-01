class AlbumPhoto < ApplicationRecord
    validates :photo_id, presence: true
    validates :album_id, presence: true

    belongs_to :photo
    belongs_to :album
end
