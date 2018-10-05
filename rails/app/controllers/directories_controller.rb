# frozen_string_literal: true

require 'file_lister'

class DirectoriesController < ApplicationController
  include FileLister

  def index
    render json: { filenames: files }
  end

  def update_file
    update_file_content params[:filename], params[:content]
    render json: { params: params }
  end
end
