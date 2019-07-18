class AddCurrentToQuotes < ActiveRecord::Migration[5.2]
  def change
    add_column :quotes, :current_quote, :boolean
  end
end
