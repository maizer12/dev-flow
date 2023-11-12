<?php 
	$title = 123;
	
?>
<div class="block">
  <a href="category.php">Все записи</a>
  <h3>Новейшее_в_блоге1</h3>
  <div class="block__content">
    <div class="articles articles__horizontal">
      
			<?php 
				$articles = $coon->query('SELECT * FROM `articles` ORDER BY `id` DESC LIMIT 4');
				if ($articles->num_rows > 0){
					while ($article = $articles->fetch_assoc()) {
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