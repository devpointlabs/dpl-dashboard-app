Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :instagrams, only: :index
  end

  namespace :api do
    resources :tweets, only: :index
    get 'search', to: 'tweets#search'
    post 'tweet', to: 'tweets#tweet'

  end

  namespace :api do
    resources :quotes, only: [:index, :update, :destroy, :create, :show]
    put 'current/:id', to: 'quotes#current'
  end

  namespace :api do
    resources :topics, only: [:index, :update, :destroy, :create, :show]
    put 'current/:id', to: 'topics#current'
  end
end