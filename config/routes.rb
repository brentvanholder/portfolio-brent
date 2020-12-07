Rails.application.routes.draw do
  root to: 'pages#home'
  get 'projects/pokemon', to: "pages#pokemon"
  get 'projects/itsadate', to: "pages#itsadate"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
