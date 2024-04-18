<?php
$db = new PDO('sqlite:/path_to_your/database.sqlite');

if (!empty($_POST['username']) && !empty($_POST['password'])) {
    $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    $stmt->execute([$_POST['username'], hash('sha256', $_POST['password'])]);
    echo "User registered successfully.";
}
?>
