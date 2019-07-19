class Api::InstagramsController < ApplicationController
  def index
    render json: InstagramClient.home_images
  end
end
