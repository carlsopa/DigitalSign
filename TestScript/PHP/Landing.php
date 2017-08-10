<?php
      $ServerName = "localhost";
      $UserName = "paulie85";
      $Password = "!Crossc85!";
      $DbName = "CarlsonSigns";
      $conn = new mysqli($ServerName,$UserName,$Password,$DbName);
      if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        $UserName = $_POST['name'];
        $UserPass = $_POST['pass'];
        if($UserName == '' || $UserPass == ''){
        } else {
          $SqlQuery = $conn->query("SELECT ID FROM Log_In WHERE UserName = '$UserName' AND Password = '$UserPass'");
          if ($SqlQuery->num_rows > 0) {
            $row = $SqlQuery->fetch_assoc();
            header('location: get.php?Name='.$row[ID]);
          } else {
            echo "fail success";
          }          
        }   
      }
?>
<html>
  <head>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js">
    </script>
    <link rel="stylesheet" type="text/css" href="site.css">
    <link href='https://fonts.googleapis.com/css?family=Architects Daughter' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Arsenal' rel='stylesheet'>
    <title></title>
  </head>
  <body>
    <div class="headcolor"><p>Carlson's Digital Signage</p></div>
    <h2><p>Taking your average sign and making it extrordinary</p></h2>
    
    <form name="LogIn" action="<?= $_SERVER['PHP_SELF']?>" onsubmit="Validation()" method="POST">
      <div class="form">
        <div id="FullEnter">Please enter both a username & password</div>
        <div id="FullFail">UserName & Password combination incorrect</div>
        <input type="text" name="name" width="60px"><br>
        <div id="UserAlert">Must enter a user name</div>
        <input type="password" name="pass"><br>
        <div id="PassAlert">Must enter a password</div>
        <input type="submit" class="button" value="Login"><br>
        <a href="#">register</a>
      </div>
    </form>
  </body>
  <script>
    function Validation(){
      var n = document.forms["LogIn"]["name"].value;
      var p = document.forms["LogIn"]["pass"].value;
      if (p == '' && n==''){
        $('#FullEnter').show();
      }
      else if (n == ''){
        $('#UserAlert').show();
      }
      else if (p == ''){
        $('PassAlert').show();
      }
    }
    $('#FullEnter').hide();
    $('#FullFail').hide();
    $('#UserAlert').hide();
    $('#PassAlert').hide();
  </script>
</html>