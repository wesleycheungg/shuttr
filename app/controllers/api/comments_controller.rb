class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.where(photo_id: params[:photo_id])
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.photo_id = params[:photo_id]
        # debugger
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

    def update
        # debugger
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entitiy
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:id, :user_id, :body)
    end
end
