<?php
  $EstabID = $_POST["ID"];
  $ServerName = "localhost";
  $UserName = "paulie85";
  $Password = "!Crossc85!";
  $DbName = "CarlsonSigns";
  $conn = new mysqli($ServerName,$UserName,$Password,$DbName);

  $MenuQuery = $conn->query("SELECT Name, Description, Price FROM Menu WHERE ID=$EstabID");
  $MenuIds=array("Name","Description","Price");
?>
<html>
  <head>
    <title></title>
    <link href='https://fonts.googleapis.com/css?family=Architects Daughter' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Arsenal' rel='stylesheet'>
  </head>
  <body>
        <table id="MenuTable">
          <?php 
            while($row=$MenuQuery->fetch_assoc()){
              echo "<tr><td $MenuIds[0]>$row[Name]</td><td $MenuIds[1]>$row[Description]</td><td $MenuIds[2]>$row[Price]</td></tr>";
            }
          ?>
        </table>
        <button>Edit</button>
  </body>
</html>