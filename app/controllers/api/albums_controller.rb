class Api::AlbumsController < ApplicationController
    def index
        if current_user.id
            @user = User.find_by(id: params[:user_id])
            @albums = Album.all.select{ |album| album.user_id === current_user.id}
            # @albums = @user.albums
            # debugger
            # @album_photos = []
            # @albums.each do |album| 
            #     @album_photos.push(album.photos.first.photoUrl)
            # end
            render :index
        else
            @albums = nil
        end
    end

    def create
        @album = Album.new(album_params)
        @album.user_id = current_user.id

        if @album.save
            render :show
            # render json: {message: "You did it"}
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def show
        @album = Album.find(params[:id])
        if @album
            @photos = @album.photos
            @user = User.find_by(id: @album.user_id)
            render :show
        else
            render json: ["there is no album with that id"]
        end
    end


    protected

    def album_params
        params.require(:album).permit(:title, :description)
    end
end
