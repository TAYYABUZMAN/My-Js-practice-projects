<?php 
$server="localhost";
$username="root";
$password="";
$db = "trip";
$con = mysqli_connect($server, $username, $password,$db);
if (!$con) {
    die("connection to this database is failed due to". mysqli_connect_error());

}
echo"success connecting to the db";

$name= $_POST['name'];
$age =$_POST["age"];
$gender=$_POST["gender"];
$email=$_POST["email"];
$phone=$_POST["phone"];
$desc=$_POST["des"];

// echo $name,$age,$gender,$email,$phone,$desc;

$sql="INSERT INTO `trip` ( `name`, `age`, `gender`, `email`, `phone`,
`other`, `dt`) VALUES ( '$name', '$age', '$gender', '$email',
'$phone', '$desc',
current_timestamp())";
echo  $sql;
echo "<br>";
echo "thanks for submitting form";
if (mysqli_query($con, $sql)) {
    echo " Data inserted successfully.";
} else {
    echo "Error: " . mysqli_error($con);
}


?>