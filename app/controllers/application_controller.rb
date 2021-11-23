class ApplicationController < ActionController::Base
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        # fetches the user we've logged in as
        @current_user = User.find_by(session_token: session[:session_token])
        # return nil if self.session[:session_token].nil?
    end

    def login(user)
        #force other clients to log out by regenerating token
        #log this client in
        session[:session_token] = user.reset_session_token!
    end

    def logout!

        @current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end

    def require_logged_in!
        render json: ["You need to be logged in"] unless logged_in?
    end

    def logged_in?
        !!current_user
    end
end
