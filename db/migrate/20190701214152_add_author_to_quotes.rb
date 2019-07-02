class AddAuthorToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :author, :string
  end
end
