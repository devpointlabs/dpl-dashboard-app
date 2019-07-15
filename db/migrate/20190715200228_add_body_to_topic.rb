class AddBodyToTopic < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :body, :string
  end
end
