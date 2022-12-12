Rails.application.routes.draw do
  # devise_for :users
  root 'home#index'
  resources :comments do
    resources :comments, only: [:create, :show, :update, :destroy]
  end
end
