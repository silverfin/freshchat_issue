Rails.application.routes.draw do
  root "pages#page_one"

  resources :pages do
    collection do
      get '/1', to: 'pages#page_one'
      get '/2', to: 'pages#page_two'
      get '/3', to: 'pages#page_three'
      get '/4', to: 'pages#page_four'
      get '/5', to: 'pages#page_five'
    end
  end
end
