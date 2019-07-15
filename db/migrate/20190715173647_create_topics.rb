class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :language
      t.string :topic

      t.timestamps
    end
  end
end
