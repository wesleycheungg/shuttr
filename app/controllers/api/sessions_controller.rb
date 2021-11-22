class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ['Invalid username or password. Please try again.'], status: 401
        end
    end

    def destroy
        if !current_user
            render json: ['There is no current user to log out.'], status: 404
        end
        logout!
    end
end
