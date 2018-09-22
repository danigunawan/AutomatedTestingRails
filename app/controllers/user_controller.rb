class UserController < ApplicationController

    def getById
        @user = User.find({ id: params[:id] })
        render json: @user, status: 200
    end

    def getByEmail
        @user = User.find({ id: params[:id] })
        render json: @user, status: 200
    end

end
