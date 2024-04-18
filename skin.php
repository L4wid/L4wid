<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: form.html");
    exit;
}
?>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Page specific content goes here -->
</body>
</html>
