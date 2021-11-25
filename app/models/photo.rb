class Photo < ApplicationRecord
    validates :photos, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"

    has_many :comments

end
