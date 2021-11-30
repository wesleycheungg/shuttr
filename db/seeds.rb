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

user1 = User.create(username: "wcheung", email: "wcheung@gmail.com", full_name: "Wesley Cheung", password: "password")
user2 = User.create(username: "wesleycheungg", email: "wesleycheung1998@gmail.com", full_name: "Wes Cheung", password: "password")
user3 = User.create(username: "demo", email: "demo@gmail.com", full_name: "Demo User", password: "password")

p1 = Photo.new(user_id: user1.id, img_url: "alley.jpg")
photo1 = URI.open("https://shuttr-seeds.s3.us-west-1.amazonaws.com/alley.jpg")
p1.photo.attach(io: photo1, filename: "alley.jpg")
p1.save

# p2 = Photo.new(user_id: user3.id, img_url: "m1.jpg")
# photo1 = URI.open("https://shuttr-pro.s3.us-west-1.amazonaws.com/DSC_0273.jpg")
# p2.photo.attach(io: photo1, filename: "m1.jpg")
# p2.save
