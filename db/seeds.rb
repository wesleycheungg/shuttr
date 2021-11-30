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

User.create(username: "demo", email: "demo@gmail.com", full_name: "Demo User", password: "password")

p1 = Photo.create(user_id: 1, img_url: "m1.jpg")
p1.photo.attach(io: open("https://shuttr-dev.s3.us-west-1.amazonaws.com/pBn26WM2vsG26FejC42KNDa7"), filename: "m1.jpg")

p2 = Photo.create(user_id: 3, img_url: "m2.jpg")
p2.photo.attach(io: open("https://shuttr-dev.s3.us-west-1.amazonaws.com/4NYXommyaiQupoE7iFQi9EkU"), filename: "m2.jpg")

p3 = Photo.create(user_id: 3, img_url: "m3.jpg")
p3.photo.attach(io: open("https://shuttr-dev.s3.us-west-1.amazonaws.com/T4ngmFXHCZTE8KN1JopyPSdx"), filename: "m3.jpg")

p4 = Photo.create(user_id: 3, img_url: "m4.jpg")
p4.photo.attach(io: open("https://shuttr-dev.s3.us-west-1.amazonaws.com/T4ngmFXHCZTE8KN1JopyPSdx"), filename: "m4.jpg")

p5 = Photo.create(user_id: 3, img_url: "m5.jpg")
p5.photo.attach(io: open("https://shuttr-dev.s3.us-west-1.amazonaws.com/6LTyhmWeyt5k1Gwh2Jo2f3o1"), filename: "m5.jpg")

p6 = Photo.create(user_id: 1, img_url: "m6.jpg")
p6.photo.attach(io: open("https://shuttr-dev.s3.us-west-1.amazonaws.com/2epnkeUcPMSKYE8RJw8WDiEG"), filename: "m6.jpg")