Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  resources :users, only: [:index, :show] do
    resources :posts, only: [:index, :show, :new, :create] do
      resources :comments, only: [:new, :create]
      resources :likes, only: [:new, :create]
    end
  end
  resources :contacts, only: [:new, :create]
  get '/contacts', to: 'contacts#new'
end
