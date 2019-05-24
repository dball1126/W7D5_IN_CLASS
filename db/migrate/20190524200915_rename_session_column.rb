class RenameSessionColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :session_digest, :session_token
  end
end
