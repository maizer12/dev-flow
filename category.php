<?php 
	require_once('./includes/header.php');

	$is_category_id = !!$category_id;

	if ($is_category_id) {
		$category_articles = $coon->query("SELECT * FROM `articles` WHERE `categories_id` = $category_id");
	}else	{
		$category_articles = $coon->query("SELECT * FROM `articles`");
	}
	
?>

<div class="container">
	<div class="block">
	  <h3>Все записи</h3>
	  <div class="block__content">
	    <div class="articles articles__horizontal">
	
				<?php 
					if ($category_articles->num_rows > 0){
						while ($article = $category_articles->fetch_assoc()) {
							echo '<article class="article">
							<div class="article__image" style="background-image: url(/media/images/post-image.jpg);"></div>
							<div class="article__info">
								<a href="#">' . $article['title'] . '</a>
								<div class="article__info__meta">
									<small>Категория: <a href="#">' . $categories[$article['categories_id'] - 1]['title'] . '</a></small>
								</div>
								<div class="article__info__preview">' . substr($article['text'], 0, 160) . ' </div>
							</div>
						</article>';
						}
					}
				?>

	      </div>
	    </div>
	</div>
<?php 

	$new_article = $_POST;
	$error = '';
	$success = '';
  
	if ($new_article) {
		$login = $new_article['login'];
		$title = $new_article['title'];
		$text = $new_article['text'];
	
		if ($login == '') {
			$error = 'Логин указан неверно';
		} else if ($title == '') {
			$error = 'Название указано неверно';
		} else if ($text == '') {
			$error = 'Текст отсутствует';
		} else {
			$sql_add_art = $coon->query("INSERT INTO `articles` (`title`, `text`, `categories_id`) VALUES ('$title', '$text', '$category_id') ");

			if ($sql_add_art) {
				$success = 'Статья успешно добавлена!';
			} else {
				$error = 'Запрос сломался: ' . $coon->error;
			}
		}
	}


if ($error) {
	echo '<p style="color:red; margin-bottom:5px;"> *'. $error .'';
} else if ($success) {
	echo '<p style="color:green; margin-bottom:5px;"> *'. $success .'';
}

if($is_category_id){
	echo 
	'<form class="form" method="post">
	  <label for="input1">Логин:</label>
	  <input type="text" id="input1" name="login">

	  <label for="input2">Название статьи:</label>
	  <input type="text" id="input2" name="title">

	  <label for="textarea">Текст:</label>
	  <textarea id="textarea" name="text"></textarea>

	  <button type="submit">Отправить</button>
	</form>';
}

	
	 
?>
</div>