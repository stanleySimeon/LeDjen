json.extract! post, :id, :title, :body, :comments_counter, :likes_counter, :author_id, :created_at, :updated_at
json.url post_url(post, format: :json)
