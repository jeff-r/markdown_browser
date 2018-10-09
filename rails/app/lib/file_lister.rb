# frozen_string_literal: true

module FileLister
  attr_accessor :project_dir

  def files(dir = project_dir)
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
      fileName: relative_path(path),
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

  def project_dir
    return @project_dir if @project_dir
    @project_dir = ENV["NOTES_DIR"] || '/home/jeff/Dropbox/docs/wiki/'
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

  def update_file_content(filename, content)
    path = project_dir + filename
    File.write path, content
  end

  def relative_path(path)
    path.gsub(project_dir.to_s, "").gsub(/^\//, "")
  end

  def file(path)
    full_path = project_dir + path
    if File.directory?(full_path)
      directory_contents full_path
    else
      File.read(full_path)
    end
  end

  private

  def directory_contents(path)
    filenames = Dir.glob("#{path}*")
    filenames.map do |filename|
      {
        filename: filename.gsub(/^#{project_dir}/,''),
        type: file_type(filename)
      }
    end
  end

  def file_type(path)
    if File.directory?(path)
      'directory'
    else
      'file'
    end
  end
end
