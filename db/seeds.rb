# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Photo.destroy_all



# users
user1 = User.create(username: "wcheung", email: "wcheung@gmail.com", full_name: "Wesley Cheung", password: "password")
user2 = User.create(username: "demo", email: "demo@gmail.com", full_name: "Demo User", password: "password")

# albums
a1 = Album.create(title: "Japan", description: "I miss Japan...", user_id: user2.id)
a2 = Album.create(title: "Mountains", description: "I love nature...", user_id: user1.id)
a3 = Album.create(title: "Test", description: "This is a test album...", user_id: user2.id)

# photos
# Japan Album
p1 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "alley.jpg")
photo1 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/alley.jpg")
p1.photo.attach(io: photo1, filename: "alley.jpg")
p1.save

p2 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "bamboo.jpg")
photo2 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/bamboo.jpg")
p2.photo.attach(io: photo2, filename: "bamboo.jpg")
p2.save

p3 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "castle.jpg")
photo3 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/castle.jpg")
p3.photo.attach(io: photo3, filename: "castle.jpg")
p3.save

p4 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "shrine.jpg")
photo4 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/shrine.jpg")
p4.photo.attach(io: photo4, filename: "shrine.jpg")
p4.save

p5 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "kyoto.jpg")
photo5 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/kyoto.jpg")
p5.photo.attach(io: photo5, filename: "kyoto.jpg")
p5.save

# Mountain Album
p6 = Photo.new(user_id: user1.id, album_id: a2.id, img_url: "m6.jpg")
photo6 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/m6.jpg")
p6.photo.attach(io: photo6, filename: "m6.jpg")
p6.save

p7 = Photo.new(user_id: user1.id, album_id: a2.id, img_url: "m7.jpg")
photo7 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/m7.jpg")
p7.photo.attach(io: photo7, filename: "m7.jpg")
p7.save

p8 = Photo.new(user_id: user1.id, album_id: a2.id, img_url: "m8.jpg")
photo8 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/m8.jpg")
p8.photo.attach(io: photo8, filename: "m8.jpg")
p8.save

# Test Album
p9 = Photo.new(user_id: user2.id, album_id: a3.id, img_url: "shirne-2.jpg")
photo9 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/shirne-2.jpg")
p9.photo.attach(io: photo9, filename: "shirne-2.jpg")
p9.save



