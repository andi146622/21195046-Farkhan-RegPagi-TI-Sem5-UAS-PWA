<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// Ambil token dari permintaan POST
	$token = $_POST['token'];

	// Cek apakah token sudah ada di database sebelum disimpan
	if (!isTokenExist($token)) {
		// Jika token belum ada, simpan ke database
		saveTokenToDatabase($token);
		return 'Token berhasil disimpan di server PHP';
	} else {
		return 'Token sudah ada di database';
	}
}

function saveTokenToDatabase($token)
{
	$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
	$statement = $pdo->prepare('INSERT INTO tb_tokens (token) VALUES (:token)');
	$statement->bindParam(':token', $token);
	$statement->execute();
}

function isTokenExist($token)
{
	$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', '');
	$statement = $pdo->prepare('SELECT COUNT(*) FROM tb_tokens WHERE token = :token');
	$statement->bindParam(':token', $token);
	$statement->execute();
	$count = $statement->fetchColumn();
	return $count > 0;
}
