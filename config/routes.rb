Rails.application.routes.draw do
  # devise_for :users
  resources :likes
  resources :posts
  resources :comments
  root "posts#index"
end
