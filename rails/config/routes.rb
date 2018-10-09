Rails.application.routes.draw do
  root to: "directories#index"

  post "/update_file", to: "directories#update_file"
  get "/path", to: "directories#path"
end
