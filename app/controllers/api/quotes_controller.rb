class Api::QuotesController < ApplicationController
  def index
    render json: Quote.all
  end

  def show
    render json: Quote.rand
  end

end
