<!-- <?php

// define variables and set to empty values
$nameErr = $emailErr = $passwordErr = $usernameErr = "apple";
$name = $email = $password = $username = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["Name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["username"])) {
    $nameErr = "Username is required";
  } else {
    $name = test_input($_POST["username"]);
  }

  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["password"])) {
    $emailErr = "Password is required";
  } else {
    $email = test_input($_POST["email"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?> -->