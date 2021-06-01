<?php
$name = $_POST['name'];
$email = $_POST['email'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$name = urldecode($name);
$email = urldecode($email);
$name = trim($name);
$email = trim($email);
//echo $name;
//echo "<br>";
//echo $email;
if (mail("partners@kiracore.com", "KIRA Network Site", "Name:".$name.". E-mail: ".$email ,"From: partners@kiracore.com \r\n"))
 {     echo "Message sent successfully";
} else {
    echo "Errors occurred while sending message";
}?>