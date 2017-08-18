<?php
  $EstabID = $_GET["Name"];
  $ServerName = "localhost";
  $UserName = "paulie85";
  $Password = "!Crossc85!";
  $DBName = "CarlsonSigns";
  $conn = new mysqli($ServerName,$UserName,$Password,$DBName);
  $BarName = $conn->query("SELECT Establishment FROM Establishment WHERE ID=$EstabID");
  $BarRow = $BarName->fetch_row();
?>

<html>

  <head>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'>
    <link href='LeftSide.css' rel='stylesheet'>
    <link href='LeftSideA.css' rel='stylesheet'>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <title>
    </title>
  </head>

  <body>
    <header class="main-header">
      <div class="Establishment-header">
        <h1><?php echo $BarRow[0]?></h1>
      </div>
      <nav class="user-nav">
        <ul class="user-nav-top">
          <li>Welcome, Paul</li>
          <li class="has-children"><a href="#0">Log Out</a></li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <nav class="side-nav">
        <ul>
          <li class="label">Control Panel</li>
          <li class="has-children"><a href="#0" id="personal">Information</a></li>
          <li class="has-children"><a href="#0" id="menu">Menu</a></li>
        </ul>
      </nav>
      <div class="content" id="MainBody">
        <h1>Testing content area</h1>
      </div>
    </main>
    <script>
      $("#menu").click(function() {
        //alert("you clicked me, congrats");
        $("#MainBody").load("menu.php",{ID: '"'+<?php echo $EstabID ?>+'"'})
        //$.post("menu.php")
      })
      $("#personal").click(function(){
        $("#MainBody").load("personal.php",{ID: '"'+<?php echo $EstabID ?>+'"'})
      })
    </script>
  </body>

</html>