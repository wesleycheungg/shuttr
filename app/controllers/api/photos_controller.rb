class Api::PhotosController < ApplicationController

    # def index
    #     @photos = Photo.all

    # end

    # def show
    #     @photo = Photo.find(params[:id])
    #     if @photo
    #         render :show
    #     else
    #         render json: @photo.errors.full_messages, status: 422
    #     end

    # end

    def create
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id

        if @photo.save
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end

    end

    # def destroy
    #     @photo = Photo.find(params[:id])
    #     if @photo.user_id === current_user.id
    #         @photo.destroy
    #     end

    # end

    def photo_params
        params.require(:photo).permit(:user_id, :img_url)
    end
end
