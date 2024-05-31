 # Functioning prototype

## Interactive description of the work

#### -**Page**: Once the page is loaded, the page will show the original design, with a ‘Play/Pause’ button at the bottom of the canvas.

#### -**Play Music**: Move your mouse to the bottom and click this button, the music will start to loop, click the button again to stop the music.

#### -**Special Effect**: After the music is played, the coloured spheres on the canvas will zoom in and out according to the frequency and volume of the music, creating a dynamic visual effect.

## Personal processing
I chose to add **audio** technology to the group's prototype to demonstrate the perfect blend of music and visuals. This way, it can create a more vivid and interactive piece that allows the audience to hear the music and simultaneously see the visual changes.


### Technology selection and reasons
To make sure that my work was different enough from the rest of the team's, I focused on combining audio with images, while the team members changed the background elements more. Specifically, my design synchronised the sphere with the audio and would change the sphere's size and speed based on the music frequency's amplitude value. Through this differentiation, we ensured that each member's work had unique highlights and characteristics and enriched the overall project.


### Inspiration
Beeple's digital art often combines music and visual effects to create stunning creations. Two of his works,  **‘2/3 Club Nomadic Night 2 / DJ Khaled and Bruno Mars’** and **‘The Void 001*020,033 / Jay Robinson MIX’** provided me with a wealth of inspiration. The work demonstrates how dynamic visual changes can be driven by audio so that the images are constantly changing in response to the tempo and energy of the music. By borrowing from Beeple in this way, I made the animated spheres in the project change size according to the audio frequency, and the keystrokes enhanced the interactivity of the work.


![club](readmeImages/club.gif )
2/3 Club Nomadic Night 2 / DJ Khaled and Bruno Mars（https://vimeo.com/joshuadavis）


![void](readmeImages/void.gif)
The Void 001*020,033 / Jay Robinson MIX (https://vimeo.com/joshuadavis)


### Technical Description
My overall design idea is all about adding audio effects based on group code.

>I loaded the audio file in `preload()` and creates a button in `setup()` for manual operations.

> Use `if (song.isPlaying()), if (song.isPlaying()) { song.stop(); } else { song.loop(); }` in the `play_pause()` function to control the play and pause of the audio.

>The `arc()` function draws multiple semicircles and arcs in the pattern, and `fft.analyze()` gets the spectral data and uses it to dynamically adjust the size of the sphere.

