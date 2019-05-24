class Api::SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
    else
      render json: errors.full_messages
    end
  end

  def destroy
    debugger
    if current_user == nil
      render :json => {:error => "not-found"}.to_json, :status => 404 
    else
      sign_out
      render json: {}
    end
  end

end