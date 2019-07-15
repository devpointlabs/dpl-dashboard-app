class Api::TopicsController < ApplicationController
  before_action :set_topic, only: [:show, :update, :destroy ]
  
  def index
    render json: Topic.all
  end

  def show
    render json: @topic
  end

  def create
    topic = Topic.new(topic_params)
    if topic.save
      render json: topic
    else
      render json: topic.errors, status: 422
    end
  end

  def current
    topic = Topic.find(params[:id])
    topic.update(current_topic: !topic.current_topic)
    render json: topic
  end

  def update
    if @topic.update(topic_params)
      render json: @topic
    else
      render json: @topic.errors, status: 422
    end
  end

  def destroy
    @topic.destroy
  end

  private

  def set_quote
    @topic = Topic.find(params[:id])
  end

  def quote_params
    params.require(:topic).permit(:author, :body, :category, :current_topic, :selected_id)
  end
end
