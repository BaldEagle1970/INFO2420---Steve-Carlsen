<?php
echo "<pre>";
echo "PHP: ", PHP_VERSION, "\n";
echo "SAPI: ", php_sapi_name(), "\n\n";

echo "[Session test]\n";
@session_start();
$_SESSION['hello'] = ($_SESSION['hello'] ?? 0) + 1;
echo "session.save_path = ", ini_get('session.save_path'), "\n";
echo "counter=", $_SESSION['hello'], "\n\n";

echo "[PDO test]\n";
require_once __DIR__.'/config.php';
try {
  $pdo->query("SELECT 1");
  echo "PDO OK\n";
} catch (Throwable $e) {
  echo "PDO ERROR: ", $e->getMessage(), "\n";
}
?>