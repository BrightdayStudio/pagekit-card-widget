<?php foreach($images as $image): if($image == null) continue; ?>
<section class="panelbox" >
          <div class=" flex colx2">
          
          <div class="txt">
          	<h3><?= $image['header'] ?></h3>
			<p><?= $image['text'] ?></p>
            <p><a href="<?= $image['url'] ?>" class="btn"> <?= $image['link'] ?>  </a></p>
            </div>

        <div class="side">
        <img src="<?= $image['src'] ?>" alt="<?= $image['alt'] ?>" />
        </div>
</div>
</section>
<?php endforeach; ?>