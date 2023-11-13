<?php require('./includes/db.php'); 

$categories_fetch = $coon->query('SELECT * FROM `categories`');
$categories = [];

if ($categories_fetch->num_rows > 0) {
  while ($category = $categories_fetch->fetch_assoc()) {
    $categories[] = $category;
  }
}


if (!empty($_GET['id'])){
  $category_id = $_GET['id'];
  $open_category = '';
  foreach ($categories as $category ){
    if ($category['id'] == $category_id){
      $open_category = $category['title'];
    }
  };
} else {
  $category_id = '';
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Блог IT_Минималиста!</title>

  <!-- Bootstrap Grid -->
  <link rel="stylesheet" type="text/css" href="/media/assets/bootstrap-grid-only/css/grid12.css">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

  <!-- Custom -->
  <link rel="stylesheet" type="text/css" href="/media/css/style.css">
</head>
<body>

<div id="wrapper">

<header id="header">
  <div class="header__top">
    <div class="container">
      <a href='/' class="header__top__logo">
        <h1> 
          <?php
            echo !empty($open_category) ? $open_category : 'Блог IT_Минималиста';
          ?>
        </h1>
      </a>
      <nav class="header__top__menu">
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Обо мне</a></li>
          <li><a href="#">Я Вконтакте</a></li>
        </ul>
      </nav>
    </div>
  </div>
<div class="header__bottom">
  <div class="container">
    <nav>
      <ul>
			<?php 
        if ($categories){
          foreach ($categories as $category) {
            echo '<li><a href="./category.php?id='. $category["id"]  .'">' . $category["title"] . '</a></li>';
          }
        }
      ?>
      </ul>
    </nav>
  </div>
</div>
</header>