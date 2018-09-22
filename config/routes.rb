Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'welcome#index.html'
  get '/docs' => 'welcome#docs.html'
  get '/api/v1/user/:id' => 'user#getById'
end
