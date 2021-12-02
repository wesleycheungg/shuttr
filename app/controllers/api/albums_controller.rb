class Api::AlbumsController < ApplicationController
    def index
        if current_user.id
            @albums = Album.all.select{ |album| album.user_id === current_user.id}
            @user = User.find_by(id: params[:user_id])
            render :index
        else
            @albums = nil
        end
    end

    def create
        @album = Album.new(album_params)
        @album.user_id = current_user.id
        # debugger
        # photo_ids = params[:album][:photo_ids].split(',')
        if @album.save
            # photo_ids.each do |photo_id|
            #     @album.photo_albums.create(photo_id: photo_id.to_i)
            # end
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
            # debugger
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
