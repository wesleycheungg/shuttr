class Api::AlbumsController < ApplicationController
    def index
        @albums = Album.all
        render :index
    end

    def create
        @album = Album.new(album_params)
        @album.user_id = current_user.id

        if @album.save
            # render :show
            render json: {message: "You did it"}
        else
            render json: @album.errors.full_messages, status 422
        end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            render :show
        else
            render json: ["there is no album with that id"]
    end


    private

    def album_params
        params.require(:album).permit(:title, :description)
    end
end
