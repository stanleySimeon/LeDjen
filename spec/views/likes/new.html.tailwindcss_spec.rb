require 'rails_helper'

RSpec.describe 'likes/new', type: :view do
  before(:each) do
    assign(:like, Like.new(
                    author_id: '',
                    post_id: ''
                  ))
  end

  it 'renders new like form' do
    render

    assert_select 'form[action=?][method=?]', likes_path, 'post' do
      assert_select 'input[name=?]', 'like[author_id]'

      assert_select 'input[name=?]', 'like[post_id]'
    end
  end
end
