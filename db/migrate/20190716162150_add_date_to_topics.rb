class AddDateToTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :date, :string
  end
end
