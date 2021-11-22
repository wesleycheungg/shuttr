class User < ApplicationRecord
    attr_reader :password
    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :full_name, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initalize :ensure_session_token

    # has_many :photos
    # has_many :albums
    # has_many :tags

    #SPIRE

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        if user && user.is_valid_password?(password)
            return user 
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_valid_password
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token = SecureRandom::urlsafe_base64
    end

end
