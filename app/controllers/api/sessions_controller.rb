class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        # debugger
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ['Invalid username or password. Please try again.'], status: 401
        end
    end

    def destroy
        # @user = current_user
        # # debugger
        # if !@user
        #     render json: ['There is no current user to log out.'], status: 422
        # else
        #     logout!
        #     render "api/users/show"
        # end
        @user = current_user
        debugger
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["Nobody is signed in"], status: 404
        end
    end
end
