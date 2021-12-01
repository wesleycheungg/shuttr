class Photo < ApplicationRecord
    validates :user_id, presence: true

    # validate :ensure_photo

    belongs_to :user

    has_many :comments

    has_one_attached :photo

    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "Must be attached"
        end
    end

end
