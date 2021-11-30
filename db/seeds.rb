# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "wcheung", email: "wcheung@gmail.com", full_name: "Wesley Cheung", password: "password")
User.create(username: "wesleycheungg", email: "wesleycheung1998@gmail.com", full_name: "Wes Cheung", password: "password")

#user_id 3 -> demo user
p1 = Photo.create(user_id: 1, img_url: "m1.jpg")
p1.photo.attach(io: File.open("/Users/wes/Desktop/shuttr/app/assets/images/mountain_landscape/m1.jpg"), filename: "m1.jpg")

p2 = Photo.create(user_id: 3, img_url: "m2.jpg")
p2.photo.attach(io: File.open("/Users/wes/Desktop/shuttr/app/assets/images/mountain_landscape/m2.jpg"), filename: "m2.jpg")

p3 = Photo.create(user_id: 3, img_url: "m3.jpg")
p3.photo.attach(io: File.open("/Users/wes/Desktop/shuttr/app/assets/images/mountain_landscape/m3.jpg"), filename: "m3.jpg")
    
p4 = Photo.create(user_id: 3, img_url: "m4.jpg")
p4.photo.attach(io: File.open("/Users/wes/Desktop/shuttr/app/assets/images/mountain_landscape/m4.jpg"), filename: "m4.jpg")

p5 = Photo.create(user_id: 3, img_url: "m5.jpg")
p5.photo.attach(io: File.open("/Users/wes/Desktop/shuttr/app/assets/images/mountain_landscape/m5.jpg"), filename: "m5.jpg")

p6 = Photo.create(user_id: 1, img_url: "m6.jpg")
p6.photo.attach(io: File.open("/Users/wes/Desktop/shuttr/app/assets/images/mountain_landscape/m6.jpg"), filename: "m6.jpg")