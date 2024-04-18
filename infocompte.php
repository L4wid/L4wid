<?php
session_start();
$db = new PDO('sqlite:/path_to_your/database.sqlite');

if (!isset($_SESSION['user_id'])) {
    header("Location: form.html");
    exit;
}
$stmt = $db->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
?>
<html>
<body>
    Your username: <?php echo htmlspecialchars($user['username']); ?>
    <!-- More user info here -->
</body>
</html>
