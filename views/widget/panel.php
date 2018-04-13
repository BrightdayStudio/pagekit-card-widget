<section class="panelbox" >
<div class=" flex colx2">
          
          <div class="txt">
          	<h3><?= $panel['header'] ?></h3>
              <p><?= $panel['text'] ?></p>
               <p><a href="<?= $panel['url'] ?>"><?= $panel['link'] ?></a></p>
            </div>

        <div class="side">
            <img src="<?= $panel['image']['src'] ?>" alt="<?= $panel['image']['alt'] ?>" />
        </div>
</div>
</section>
