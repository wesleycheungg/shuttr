class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description
      t.timestamps
    end
    add_index :albums, :user_id
  end
end
