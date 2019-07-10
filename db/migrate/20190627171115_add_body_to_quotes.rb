class AddBodyToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :body, :string
  end
end
