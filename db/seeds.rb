# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "wcheung", email: "wcheung@gmail.com", full_name: "Wesley Cheung", password: "password")
User.create(username: "wesleycheungg", email: "wesleycheung1998@gmail.com", full_name: "Wes Cheung", password: "password")
User.create(username: "test", email: "test@gmail.com", full_name: "Test", password: "bad")

Photo.create(user_id: 6, img_url: "m1.jpg")
Photo.create(user_id: 6, img_url: "m2.jpg")
Photo.create(user_id: 6, img_url: "m3.jpg")
Photo.create(user_id: 6, img_url: "m4.jpg")
Photo.create(user_id: 1, img_url: "m5.jpg")
Photo.create(user_id: 2, img_url: "m6.jpg")
Photo.create(user_id: 2, img_url: "m7.jpg")
Photo.create(user_id: 3, img_url: "m8.jpg")
Photo.create(user_id: 6, img_url: "m9.jpg")
Photo.create(user_id: 1, img_url: "m10.jpg")
