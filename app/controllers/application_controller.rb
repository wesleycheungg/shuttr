class ApplicationController < ActionController::Base
    # Prevent CSRF attacks by raising an exception.
    # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception

    def current_user
        # fetches the user we've logged in as
        @current_user ||= User.find_by(session_token: session[:session_token])
        return nil if self.session[:session_token].nil?
    end

    def login(user)
        #force other clientes to log out by regenerating token
        current_user.reset_session_token
        #log this client in
        self.session[:session_token] = current_user.session_token
    end

    def logout
        self.session[:session_token] = nil
    end

    # def require_logged_in!

    # end

    # def logged_in?

    # end
end
