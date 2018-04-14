<section class="panelbox" >
<div class=" flex colx2">
          
          <div class="txt">
              
        <?php if ($panel['header']) : ?>
            <h3><?= $panel['header'] ?></h3>
         <?php endif ?>
              
              <p><?= $panel['text'] ?></p>
               <p><a href="<?= $panel['url'] ?>"><?= $panel['link'] ?></a></p>
            </div>

        <div class="side">
            <img src="<?= $panel['image']['src'] ?>" alt="<?= $panel['image']['alt'] ?>" />
        </div>
</div>
</section>
