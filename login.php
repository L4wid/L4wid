<?php
session_start();
$db = new PDO('sqlite:/path_to_your/database.sqlite');

if (!empty($_POST['username']) && !empty($_POST['password'])) {
    $stmt = $db->prepare("SELECT id, username FROM users WHERE username = ? AND password = ?");
    $stmt->execute([$_POST['username'], hash('sha256', $_POST['password'])]);  // Consider using a more secure method!
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        header("Location: index.php");
        exit;
    } else {
        echo "Invalid username or password.";
    }
}
?>
