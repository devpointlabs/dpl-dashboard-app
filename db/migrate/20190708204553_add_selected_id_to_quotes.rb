class AddSelectedIdToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :selected_id, :string
  end
end
