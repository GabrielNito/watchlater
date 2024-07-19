# Watchlater

This project is focused on saving YouTube links so you can watch them later and keep track of the videos you've already watched. <br /><br />
I've decided to do this project because even though I can save videos in a file, on a discord chat, or even on YouTube itself, 
I wanted to keep track of what I've already watched, so when I wanted I could easily check.

# Technologies Used
- **React** with **Typescript**
- **Shadcn/ui**

# Functioning

The use is very straightforward, on the top right corner you'll find the **Add Video** button, which will lead you to this page, 
where you can insert the YouTube link, and add it to the Watch Later list

![AddVideo](https://github.com/user-attachments/assets/cdef67ce-59df-4584-b0a0-6e5d84734ca0)

After that, you'll see the thumbnails of the videos you've saved

![Interface](https://github.com/user-attachments/assets/25d1cdfd-348c-41aa-a333-b1c0cb71dcbc)

Right-clicking any video will bring up two options:
- Set as Watched: _Sends the video to the Watched tab_
- Delete video: _Simply delete the video from the db_

![Options](https://github.com/user-attachments/assets/3c5d942b-a2f1-45a8-bb5c-c9c76a414c74)

For simpler storage and fast loading, data is stored in the localStorage.

![LocalStorage](https://github.com/user-attachments/assets/4dae1237-1371-4d92-b99f-20ba0ff65cb2)
