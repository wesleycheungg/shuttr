class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(photo_id: params[:photo_id]).includes(:user)
        render :index
    end

    def create
        @comment = current_user.comments.new(comment_params)
        @comment.photo_id = params[:photo_id]

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entitiy
        end
    end


    private

    def comment_params
        params.require(:comment).permit(:body)
    end
end
