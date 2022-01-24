Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show]
    resources :users do 
      resources :photos, only: [:index]
      resources :albums, only: [:index] do
        resources :photos, only: [:index]
      end
    end

    resources :photos, only: [:index, :show, :create, :destroy] do
      resources :comments, only: [:index, :create, :update]
    end

    resources :albums, only: [:index, :create, :show, :destroy, :update]
    resources :comments, only: [:show, :update, :destroy]
  end
end
