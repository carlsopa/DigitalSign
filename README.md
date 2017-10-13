Digital Picture Frame

The idea for the project came when trying to figure out what to get my dad for Christmas last year.  He loves to take photos and so I started to look for a digital photo frame.  The only problem, is that they would only show one picture at a time, and not adjust for orientation.  So, I set out to do better, and created my own digital picture frame.

What it does:
Using a Raspberry Pi for the brains, and a portable hard drive pictures are randomly selected and displayed on a 24" screen.  The screen display is set to show three photos in landscape and two in portrait orientation at the same time.  The program will also take into account any photos were the camera was held "upside down" (we have all done it), and will flip it right side up.  Two ways to upload photos are either by USB or a simple web interface that can be used on either mobile or desktop.

How it works:
The main program is written in PYTHON utilizing the PYGAME module to create a full screen display.  All files that are uploaded are saved to a portable harddrive to prevent constant read/writes against the SD card in side the Raspberry Pi.  The program will scan over all the meta data of the pictures to determine size and orientation, this will determine which list it goes in.  The software will then randomly choose a number between 0 and the max list size to select a photo to display.  A simple fade in and out using opacity will shift between photos.
The interface for managing photos is a basic HTML & PHP page that allows you to upload photos and delete them from the harddrive.  This is served on the Raspberry Pi using a lightweight APACHE server.
