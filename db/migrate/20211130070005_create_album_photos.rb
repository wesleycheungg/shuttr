class CreateAlbumPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :album_photos do |t|
      t.integer :user_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :album_photos, :user_id
    add_index :album_photos, :photo_id
  end
end
