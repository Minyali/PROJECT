<?php
$fullname = $_POST['fullName'];
$gender = $_POST['gender'];
$number = $_POST['number'];
$email = $_POST['email'];
$password = $_POST['password'];
$re_password = $_POST['re_password'];
$residing_area = $_POST['residing_area'];

//Database connection
$conn = new mySquli('localhost', 'root','', 'test');
if ($conn->connect_error) {
    die('Connection Failed :'.$conn->connect_error);
}else {
    $stmt = conn->prepare("insert into registration(fullName, gender, number, email, password, re_password, residing_area)
    values(?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssissss" $fullName, $gender, $number, $email, $password, $re_password, $residing_area);
    $stmt->excecute();
    echo "registration Successfully"
    $stmt->close();
    $conn->close();
}
?>