class AddQuoteToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :quote, :text
  end
end
