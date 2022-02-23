[live link](https://shuttr-1.herokuapp.com/#/)

# Shuttr

Shuttr is a full-stack web application that is a inspired by Flickr. Users can share and view photos. This application allows users to create albums, upload photos to those albums, make comments on photos, create tags on photos, and explore other user's photos as well.

<img src="app/assets/images/github/main_page.png">

# Technologies Used
* Ruby on Rails
* PostgreSQL
* React.js
* Redux
* jQuery
* SCSS
* Amazon's S3

# Features

## User Authentication
Users can create an account that will allow them to use different features of the Shuttr web application. If users already have an account they can log back in with their credentials. Error messages will populate on the screen if any of their input fields do not meet the requirements.

<img src="app/assets/images/github/auth.gif">

## Photos

### Uploading Photos
Users can click and add photos along with a photo totle to any album they already have created via the `Upload` button on the Navigation Bar. Once an image is uploaded via the `Upload` button, they will be redirected the that photo's show page where just that photo is displayed.

### Uploading Photos to Album
Users can add photos to albums using the `Upload` button as well. There is a drop down menu in which they can select albums they have already created and would like the photo they are currently uploading to be placed in there. Photos and Albums are connected with a join association between `albums` and `photos` in a `joins_table` called `album_photos`.

### Viewing a Photo
Albums belong to a `user` and can hold many `photos`. Users will be able to view a gallery of photos via the `Explore Page`, `Photostream Page`, or `Album Page`. If a photo is clicked, they will be brought to that photo's show page where the photo is individually displayed and users can make comments.

<img src="app/assets/images/github/photo.gif">

## Albums

### Creating a Album
Users can create an `album` by clicking the `Profile` button on the top right. Then click the `Albums` button on the profile nav bar which will take the user to a page with all the user's albums. Then click the `Create New Album` for the create new album form.

## Tags

### Tags
Tags belong to a `photo_id` and a `tag_id`. Tags are connected to Photos via a join association between `tags` and `photos` in a `joins_table` called `photo_Tags`.

### Challenge
**I ran into an issue when it came to the tags_controller and the `create` route. If a user creates a new tag for a photo that has already been used on a different photo, I didn't want the application to create a completely new row entry on the backend for a tag that has already been used.**

### Solution
**The solution I figured was to use a `joins_table` between `tags` and `photos`. On the backend, when a user creates a tag for a photo, I first check to see if the tag name already exists. If it returns nil, that means it does not exist so I create that new tag. Then it proceeds to create an association using the `joins_table` to associate that tag name with the photo. And since `tags` has the `has_many` association with `photos` we don't need to create a new row entry for every tag made. Instead we create a `PhotoTag` that uses the id's of `photos` and `tags` to associate with each other.**

```ruby
  def create 
        #when a user creates a tag for a photo, we first check if the tag already exists
        @tag = Tag.find_by(name: params[:tag][:name])
        #if tag does not exist -> create the new tag
        if @tag == nil
            @tag = Tag.new(name: params[:tag][:name])
        end
        #if tag doesn't save, then render errors
        if !@tag.save
            render json: @tag.errors.full_messages, status: 422
        #if tag does save, we do not want to create duplicate. instead create a PhotoTag
        #using the id's for the photo and tag to associate with each other
        else
            photo_id = params[:photo_id]
            PhotoTag.create(photo_id: photo_id, tag_id: @tag.id)
            render :show
        end
    end
```

## Comments

### Comments
Comments belong to a `user` and a `photo`. Each photo will have a comments section below the image on it's Photo Show Page when the photo is clicked on. Comments can only be **deleted** and **edited** by the `user` who created it. Other users will not be able to see the `delete icon` next to comments that are not thiers.

<img src="app/assets/images/github/warriors.gif">


##Future Improvements

### Search Bar
Implement a search bar so that users can search photos by tags. It will then redirect them to a Photostream page of photos with the specific tag searched by.
