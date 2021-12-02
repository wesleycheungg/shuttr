class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(photo_id: params[:photo_id])
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

    def destroy
        # debugger
        @comment= Comment.find_by(id: params[:id])
        @comment.destroy
        render :show
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end
end
