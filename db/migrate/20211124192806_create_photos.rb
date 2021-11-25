class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.integer :album_id
      t.string :img_url, null: false
      t.timestamps
    end

    add_index :photos, :user_id
    add_index :photos, :album_id
  end
end
