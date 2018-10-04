# frozen_string_literal: true

require 'file_lister'

class DirectoriesController < ApplicationController
  include FileLister

  def index
    render json: { filenames: files }
  end
end
