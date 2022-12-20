class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.bigint :comments_counter
      t.bigint :likes_counter
      t.bigint :author_id

      t.timestamps
    end
  end
end
