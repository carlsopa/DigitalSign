<?php
  $EstabID = $_GET["Name"];
  $ServerName = "localhost";
  $UserName = "paulie85";
  $Password = "!Crossc85!";
  $DbName = "CarlsonSigns";
  $conn = new mysqli($ServerName,$UserName,$Password,$DbName);

  $PersonalQuery = $conn->query("SELECT OwnerFirstName, OwnerLastName, OwnerEmail FROM Personal WHERE ID=$EstabID");
  $MenuQuery = $conn->query("SELECT Name, Description, Price FROM Menu WHERE ID=$EstabID");
  $LocQuery = $conn->query("SELECT EstAddress, EstCity, EstState, EstZip, EstPhone FROM EstablishmentLocation WHERE ID=$EstabID");
  $TitleQuery = $conn->query("SELECT Establishment FROM Establishment WHERE ID=$EstabID");
  $TitleRow = $TitleQuery->fetch_row();
  $LocRows = $LocQuery->fetch_assoc();
  $PersonalRows = $PersonalQuery->fetch_assoc();
  $PersonalIds=array("FirstName","LastName","Email");
  $MenuIds=array("Name","Description","Price");
  $LocationIds=array("EstAddress","EstCity","EstState","EstZip","EstPhone");
  $testA = "testing this";
  $testB = "Yet Another Test";
?>
<html>
  <head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="site.css">
    <link href='https://fonts.googleapis.com/css?family=Architects Daughter' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Arsenal' rel='stylesheet'>
  </head>
  <body>
    <div id="Title">
      <?php echo $TitleRow[0]; ?>
    </div>
    <div id="Personal">
        <form>
          <?php
            $x = 0;
            $y = 0;
            while($x < count($LocRows)){
              echo "<input type='text' value='".$LocRows[$LocationIds[$x]]."' width='60px' readonly><br>";
              $x++;
            }
            while($y < count($PersonalRows)){
              echo "<input type='text' value='".$PersonalRows[$PersonalIds[$y]]."' readonly><br>";
              $y++;
            }
          ?>
        </form>
      </div>
    <div id="Menu">
      <table>
        <?php 
          while($row=$MenuQuery->fetch_assoc()){
            echo "<tr><td $MenuIds[0]>$row[Name]</td><td $MenuIds[1]>$row[Description]</td><td $MenuIds[2]>$row[Price]</td></tr>";
          }
        ?>
      </table>
    </div>
  </body>
</html>