class Comment < ApplicationRecord
    validates :body, presence: true
    validates :user_id, presence: true
    validates :photo_id, presence: true

    belongs_to :photo
    belongs_to :user

    include ActionView::Helpers::DateHelper

    def posted_time_ago
        time_ago_in_words(self.created_at) + " ago"
    end

end
