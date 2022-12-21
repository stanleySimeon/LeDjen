Rails.application.routes.draw do
  devise_for :users
  root 'users#index'
  resources :users, only: [:index, :show] do
    resources :posts, only: [:index, :show, :new, :create] do
      resources :comments, only: [:new, :create]
      get '/comments', to: 'comments#new'
      resources :likes, only: [:new, :create]
      get '/likes', to: 'likes#new'
    end
  end
  resources :contacts, only: [:new, :create]
  get '/contacts', to: 'contacts#new'
end
