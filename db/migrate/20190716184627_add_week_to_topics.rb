class AddWeekToTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :week, :integer
    add_column :topics, :day, :integer
  end
end
