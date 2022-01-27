class Api::TagsController < ApplicationController

    def index
        photo_id = params[:photo_id]
        @tags = Photo.find(photo_id).tags
        render :index
    end

    def create 
        @tag = Tag.find_by(name: params[:tag][:name])
        # debugger
        if @tag == nil
            @tag = Tag.new(name: params[:tag][:name])
        end

        if !@tag.save
            # render json: ['Enter a new tag.'], status: 422
            render json: @tag.errors.full_messages, status: 422
        else
            photo_id = params[:photo_id]
            PhotoTag.create(photo_id: photo_id, tag_id: @tag.id)
            render :show
        end
    end

    def tag_params
        params.require(:tag).permit(:name)
    end

end
