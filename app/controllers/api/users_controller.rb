class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
        # render 'api/users/index'
    end

    def create
        @user = User.new(user_params)
            if @user.save
                login(@user)
                render :show
                # render 'api/users/show'
            else
                render json: @user.errors.full_messages, status: 401
            end
    end


    protected
    def user_params
        params.require(:user).permit(:username, :email, :full_name, :password)
    end
end
