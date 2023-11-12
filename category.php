<?php 
	require_once('./includes/header.php');

	$category_articles = $coon->query("SELECT * FROM `articles` WHERE `categories_id` = $category_id");
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
</div>