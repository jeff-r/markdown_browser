# frozen_string_literal: true

require 'file_lister'

class DirectoriesController < ApplicationController
  include FileLister

  def index
    render json: { filenames: files }
  end

  def path
    pathname = params[:pathname] || "/"
    render json: { filenames: file(pathname) }
  end

  def update_file
    update_file_content params[:filename], params[:content]
    render json: { params: params }
  end
end
