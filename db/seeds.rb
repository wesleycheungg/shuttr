# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"
User.destroy_all
Photo.destroy_all

user1 = User.create(username: "wcheung", email: "wcheung@gmail.com", full_name: "Wesley Cheung", password: "password")
user2 = User.create(username: "wesleycheungg", email: "wesleycheung1998@gmail.com", full_name: "Wes Cheung", password: "password")
user3 = User.create(username: "test", email: "test@gmail.com", full_name: "Test", password: "bad")
user4 =User.create(username: "demo", email: "demo@gmail.com", full_name: "Demo User", password: "password")

p1 = Photo.new(user_id: user1.id, img_url: "m1.jpg")
# photo1 = open("https://shuttr-dev.s3.us-west-1.amazonaws.com/pBn26WM2vsG26FejC42KNDa7")
photo1 = open("./app/assets/images/mountain_landscape/m1.jpg")
p1.photo.attach(io: photo1, filename: "m1.jpg")
p1.save

# p2 = Photo.create(user_id: user4.id, img_url: "m2.jpg")
# photo2 = open("https://shuttr-dev.s3.us-west-1.amazonaws.com/4NYXommyaiQupoE7iFQi9EkU")
# p2.photo.attach(io: photo2, filename: "m2.jpg")

# p3 = Photo.create(user_id: user4.id, img_url: "m3.jpg")
# photo3 = open("https://shuttr-dev.s3.us-west-1.amazonaws.com/T4ngmFXHCZTE8KN1JopyPSdx")
# p3.photo.attach(io: photo3, filename: "m3.jpg")

# p4 = Photo.create(user_id: user4.id, img_url: "m4.jpg")
# photo4 = open("https://shuttr-dev.s3.us-west-1.amazonaws.com/NECDRowXRnRN2ex6BBw75UVA")
# p4.photo.attach(io: photo4, filename: "m4.jpg")

# p5 = Photo.create(user_id: user4.id, img_url: "m5.jpg")
# photo5 = open("https://shuttr-dev.s3.us-west-1.amazonaws.com/6LTyhmWeyt5k1Gwh2Jo2f3o1")
# p5.photo.attach(io: photo5, filename: "m5.jpg")

# p6 = Photo.create(user_id: user1.id, img_url: "m6.jpg")
# photo6 = open("https://shuttr-dev.s3.us-west-1.amazonaws.com/2epnkeUcPMSKYE8RJw8WDiEG")
# p6.photo.attach(io: photo6, filename: "m6.jpg")

# p1 = Photo.create(user_id: 1, img_url: "m1.jpg")
# photo1 = URI.open("https://shuttr-dev.s3.us-west-1.amazonaws.com/pBn26WM2vsG26FejC42KNDa7")
# p1.photo.attach(io: photo1, filename: "m1.jpg")

# p2 = Photo.create(user_id: 3, img_url: "m2.jpg")
# photo2 = URI.open("https://shuttr-dev.s3.us-west-1.amazonaws.com/4NYXommyaiQupoE7iFQi9EkU")
# p2.photo.attach(io: photo2, filename: "m2.jpg")

# p3 = Photo.create(user_id: 3, img_url: "m3.jpg")
# photo3 = URI.open("https://shuttr-dev.s3.us-west-1.amazonaws.com/T4ngmFXHCZTE8KN1JopyPSdx")
# p3.photo.attach(io: photo3, filename: "m3.jpg")

# p4 = Photo.create(user_id: 3, img_url: "m4.jpg")
# photo4 = URI.open("https://shuttr-dev.s3.us-west-1.amazonaws.com/NECDRowXRnRN2ex6BBw75UVA")
# p4.photo.attach(io: photo4, filename: "m4.jpg")

# p5 = Photo.create(user_id: 3, img_url: "m5.jpg")
# photo5 = URI.open("https://shuttr-dev.s3.us-west-1.amazonaws.com/6LTyhmWeyt5k1Gwh2Jo2f3o1")
# p5.photo.attach(io: photo5, filename: "m5.jpg")

# p6 = Photo.create(user_id: 1, img_url: "m6.jpg")
# photo6 = URI.open("https://shuttr-dev.s3.us-west-1.amazonaws.com/2epnkeUcPMSKYE8RJw8WDiEG")
# p6.photo.attach(io: photo6, filename: "m6.jpg")
