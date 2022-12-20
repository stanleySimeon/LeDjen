require 'rails_helper'

RSpec.describe 'posts/edit', type: :view do
  let(:post) do
    Post.create!(
      title: 'MyString',
      body: 'MyText',
      comments_counter: '',
      likes_counter: '',
      author_id: ''
    )
  end

  before(:each) do
    assign(:post, post)
  end

  it 'renders the edit post form' do
    render

    assert_select 'form[action=?][method=?]', post_path(post), 'post' do
      assert_select 'input[name=?]', 'post[title]'

      assert_select 'textarea[name=?]', 'post[body]'

      assert_select 'input[name=?]', 'post[comments_counter]'

      assert_select 'input[name=?]', 'post[likes_counter]'

      assert_select 'input[name=?]', 'post[author_id]'
    end
  end
end
