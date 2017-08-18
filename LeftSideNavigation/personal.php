<?php    
  $EstabID = $_POST["ID"];
  $ServerName = "localhost";
  $UserName = "paulie85";
  $Password = "!Crossc85!";
  $DbName = "CarlsonSigns";
  $conn = new mysqli($ServerName,$UserName,$Password,$DbName);
  
  $PersonalQuery = $conn->query("SELECT OwnerFirstName, OwnerLastName, OwnerEmail FROM Personal WHERE ID=$EstabID");
  $LocQuery = $conn->query("SELECT EstAddress, EstCity, EstState, EstZip, EstPhone FROM EstablishmentLocation WHERE ID=$EstabID");
    $LocRows = $LocQuery->fetch_assoc();
  $PersonalRows = $PersonalQuery->fetch_assoc();
    $PersonalIds=array("OwnerFirstName","OwnerLastName","OwnerEmail");
  $LocationIds=array("EstAddress","EstCity","EstState","EstZip","EstPhone");
?>
<html>
  <head>
    <title>
    </title>
  </head>
  <body>
    <form>
      <?php
        $x = 0;
        $y = 0;
        while($x < count($LocRows)){
          echo "<input type='text' value='".$LocRows[$LocationIds[$x]]."' width='60px' readonly><br>";
          $x++;
        }
        while($y < count($PersonalRows)){
          //echo count($PersonalRows);
          //echo $y;
          //echo $PersonalRows[$PersonalIds[0]];
          echo "<input type='text' value='".$PersonalRows[$PersonalIds[$y]]."' readonly><br>";
          $y++;
        }
      ?>
      <input type="button" value="Edit">
    </form>
  </body>
</html>