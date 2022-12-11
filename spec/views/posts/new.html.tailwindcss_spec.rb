require 'rails_helper'

RSpec.describe "posts/new", type: :view do
  before(:each) do
    assign(:post, Post.new(
      title: "MyString",
      body: "MyText",
      comments_counter: "",
      likes_counter: "",
      author_id: ""
    ))
  end

  it "renders new post form" do
    render

    assert_select "form[action=?][method=?]", posts_path, "post" do

      assert_select "input[name=?]", "post[title]"

      assert_select "textarea[name=?]", "post[body]"

      assert_select "input[name=?]", "post[comments_counter]"

      assert_select "input[name=?]", "post[likes_counter]"

      assert_select "input[name=?]", "post[author_id]"
    end
  end
end
