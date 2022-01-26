class Api::TagsController < ApplicationController

    def create 
        @tag = Tag.find_by(name: params[:tag][:name])
        if @tag == nil
            @tag = Tag.new(tag_params)
        end
        
        if !@tag.save
            render json: ['Enter a new tag.'], status: 422
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
