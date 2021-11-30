class UpdateAlbumPhoto2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :album_photos, :album_id

    add_column :album_photos, :album_id, :string, null: false
    add_index :album_photos, :album_id


  end
end
