class UserController < ApplicationController

    def getById
        @user = User.find(params[:id])
        render json: @user, status: 200
    end

    def getByEmail
        @user = User.find_by_email({ id: params[:email] })
        render json: @user, status: 200
    end

end
