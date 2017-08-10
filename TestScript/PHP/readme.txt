The structure of this code is based around PHP.  This allows me easier access to my sql database to retreive and edit information.  
The first page that would load up would be the landing.php.  Once you put in the correct login information, it will then pass you ID to personal.php.
Personal.php will then take your ID and retreive all the saved information from the data base, based around that ID.

Further steps with this:
1) Better CSS control.  I need to organize and pretty it up a little more.
2) Editable text feilds.  Currently I have them as readonly, but I would like to add a button that when pressed would allow the editing of text feilds.
3) Landing page, error codes.  I would like to have it show an error and reload the page when you do something in correctly.  Currently, I have divs that are hidden
and will show for 2 seconds before the page reloads and they disapear again when you do something wrong.
4) Better looking, instead of BLAH, i would like to get it to EH, and then possibly WOW!

given you need a server to test the pages out on, you can use the following to see it in action:
http://www.carlsondigitalsigns.com/newtst.php
Login using: PaulC & paulrc