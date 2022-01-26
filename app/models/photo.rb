class Photo < ApplicationRecord
    validates :user_id, presence: true

    # validate :ensure_photo

    belongs_to :user

    has_many :comments

    has_many :photo_tags,
        class_name: :PhotoTag,
        foreign_key: :photo_id,
        primary_key: :id

    has_many :tags,
        through: :photo_tags,
        source: :tag

    has_one_attached :photo

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "Must be attached"
        end
    end

end
