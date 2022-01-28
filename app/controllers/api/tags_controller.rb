class Api::TagsController < ApplicationController
    #find all tags for a photo
    def index
        photo_id = params[:photo_id]
        @tags = Photo.find(photo_id).tags
        render :index
    end

    def create 
        #when a user creates a tag for a photo, we first check if the tag already exists
        @tag = Tag.find_by(name: params[:tag][:name])
        #if tag does not exist -> create the new tag
        if @tag == nil
            @tag = Tag.new(name: params[:tag][:name])
        end
        #if tag doesn't save, then render errors
        if !@tag.save
            render json: @tag.errors.full_messages, status: 422
        #if tag does save, we want do not want to create duplicate. instead create a PhotoTag
        #using the id's for the photo and tag to associate with each other
        else
            photo_id = params[:photo_id]
            PhotoTag.create(photo_id: photo_id, tag_id: @tag.id)
            render :show
        end
    end

    def destroy
        @tag = Tag.dind(params[:id])
        photo_id = params[:photo_id]
        photo_tag = PhotoTag.find_by(tag_id: @tag.id, photo_id: photo_id)
        photo_tag.destroy
        render :show
    end

    def tag_params
        params.require(:tag).permit(:name)
    end

end
