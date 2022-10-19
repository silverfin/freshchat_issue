Rails.application.routes.draw do
  root "pages#page_one"

  resources :pages do
    collection do
      get '/1', to: 'pages#page_one'
      get '/2', to: 'pages#page_two'
    end
  end
end
