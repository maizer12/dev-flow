<?php 
	$server_name = '127.0.0.1:3306';
	$user = 'root';
	$password = '';
	$database = 'my_db';

	$coon = new mysqli($server_name, $user, $password, $database);

if ($coon->connect_error) {
	die('Неудалось подключится к серверу!'. $coon->connect_error);
}
