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
a4 = Album.create(title: "GSW", description: "Why are the Warriors the best team in the NBA?", user_id: user2.id)
a3 = Album.create(title: "Test", description: "This is a test album...", user_id: user2.id)

# photos
# Japan Album
p1 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "Alley in Kyoto")
photo1 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/alley.jpg")
p1.photo.attach(io: photo1, filename: "Alley in Kyoto")
p1.save

p2 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "Bamboo Forest")
photo2 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/bamboo.jpg")
p2.photo.attach(io: photo2, filename: "Bamboo Forest")
p2.save

p3 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "Kyoto Castle")
photo3 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/castle.jpg")
p3.photo.attach(io: photo3, filename: "Kyoto Castle")
p3.save

p4 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "Shrine 1")
photo4 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/shrine.jpg")
p4.photo.attach(io: photo4, filename: "Shrine 1")
p4.save

p5 = Photo.new(user_id: user2.id, album_id: a1.id, img_url: "View of Kyoto")
photo5 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/kyoto.jpg")
p5.photo.attach(io: photo5, filename: "View of Kyoto")
p5.save

# Mountain Album
p6 = Photo.new(user_id: user1.id, album_id: a2.id, img_url: "Lake in the Mountains")
photo6 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/m6.jpg")
p6.photo.attach(io: photo6, filename: "Lake in the Mountains")
p6.save

p7 = Photo.new(user_id: user1.id, album_id: a2.id, img_url: "River")
photo7 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/m7.jpg")
p7.photo.attach(io: photo7, filename: "River")
p7.save

p8 = Photo.new(user_id: user1.id, album_id: a2.id, img_url: "Starry Night")
photo8 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/m8.jpg")
p8.photo.attach(io: photo8, filename: "Starry Night")
p8.save

# Test Album
p9 = Photo.new(user_id: user2.id, album_id: a3.id, img_url: "Shrine 2")
photo9 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/shirne-2.jpg")
p9.photo.attach(io: photo9, filename: "Shrine 2")
p9.save

# Warriors Album
p10 = Photo.new(user_id: user2.id, album_id: a4.id, img_url: "Steph")
photo10 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/steph.jpg")
p10.photo.attach(io: photo10, filename: "Steph")
p10.save

p11 = Photo.new(user_id: user2.id, album_id: a4.id, img_url: "The Big 4")
photo11 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/big-4.jpg")
p11.photo.attach(io: photo11, filename: "The Big 4")
p11.save

p12 = Photo.new(user_id: user2.id, album_id: a4.id, img_url: "Klay")
photo12 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/klay.jpg")
p12.photo.attach(io: photo12, filename: "Klay")
p12.save

p13 = Photo.new(user_id: user2.id, album_id: a4.id, img_url: "75")
photo13 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/75.jpg")
p13.photo.attach(io: photo13, filename: "75")
p13.save

p14 = Photo.new(user_id: user2.id, album_id: a4.id, img_url: "Warriors Squad (2019-2020)")
photo14 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/team.jpg")
p14.photo.attach(io: photo14, filename: "Warriors Squad (2019-2020)")
p14.save

#Comments
c1 = Comment.create(body: "wow what an amazing photo!", user_id: user2.id, photo_id: p6.id)
c2 = Comment.create(body: "sick!", user_id: user2.id, photo_id: p7.id)
c3 = Comment.create(body: "WOW!", user_id: user2.id, photo_id: p8.id)


