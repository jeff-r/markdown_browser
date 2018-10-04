# frozen_string_literal: true

class DirectoriesController < ApplicationController
  def index
    render json: { filenames: files }
  end

  def jobs_dir
    '/home/jeff/Dropbox/docs/jeffs-job-folder/2018'
  end

  def test_dir
    '/home/jeff/Dropbox/projects/javascript/react/notes/notes_rails/tmp/markdown'
  end

  def files(dir = jobs_dir)
    paths = Dir.glob("#{dir}/*")
    paths.map do |path|
      if File.directory?(path)
        dir_hash path
      else
        file_hash path
      end
    end
  end

  def file_hash(path)
    {
      fileName: File.basename(path),
      content: file_contents(path),
      type: File.ftype(path)
    }
  end

  def dir_hash(path)
    {
      directoryName: File.basename(path),
      files: files(path)
    }
  end

  def renderable?(filename)
    extension = File.extname(filename)
    ['.md', '.txt'].include? extension
  end

  def file_contents(filename)
    if renderable?(filename)
      File.read filename
    else
      File.basename(filename)
    end
  end
end
