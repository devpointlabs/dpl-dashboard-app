class AddCategoryToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :category, :string
  end
end
