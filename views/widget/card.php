<section class="card" >
<div class=" flex colx2">

          <div class="txt">

        <?php if ($card['header']) : ?>
            <h3><?= $card['header'] ?></h3>
         <?php endif ?>

              <p><?= $card['text'] ?></p>
               <p><a href="<?= $card['url'] ?>"><?= $card['link'] ?></a></p>
            </div>

        <div class="side">
            <img src="<?= $card['image']['src'] ?>" alt="<?= $card['image']['alt'] ?>" />
        </div>
</div>
</section>
