class PhotosController < ApplicationController

    def show
        @photo = Photo.find(params[:id])
        if @photo
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

end