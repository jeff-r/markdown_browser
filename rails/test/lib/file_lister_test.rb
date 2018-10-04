# frozen_string_literal: true

require 'test_helper'

class FileListerHarness
  include FileLister
end

class FileListerTest < ActiveSupport::TestCase
  test 'project_dir defaults to correct path' do
    expected = '/home/jeff/Dropbox/docs/jeffs-job-folder/2018'
    assert_equal expected, lister.project_dir
  end

  test 'shows .md as renderable' do
    assert lister.renderable?('foo.md')
  end

  test 'shows .txt as renderable' do
    assert lister.renderable?('foo.txt')
  end

  test 'shows .html as not renderable' do
    assert !lister.renderable?('foo.html')
  end

  test 'returns a proper hash of a directory' do
    expected = [
      { fileName: 'sample.md', content: "Sample markdown content\n", type: 'file' },
      { fileName: 'sample.pdf', content: 'sample.pdf', type: 'file' }
    ]

    assert_equal expected,lister.files(sample_dir_path)
  end

  test 'returns the filename for a nonrenderable file' do
    expected = 'sample.pdf'
    assert lister.file_contents(pdf_file_path).include?(expected)
  end

  test 'returns contents of a renderable file' do
    expected = 'Sample markdown content'
    assert lister.file_contents(markdown_file_path).include?(expected)
  end

  private

  def sample_dir_path
    Rails.root.join('test', 'helper_files')
  end

  def pdf_file_path
    Rails.root.join('test', 'helper_files', 'sample.pdf')
  end

  def markdown_file_path
    Rails.root.join('test', 'helper_files', 'sample.md')
  end

  def lister
    @lister ||= FileListerHarness.new
  end
end
