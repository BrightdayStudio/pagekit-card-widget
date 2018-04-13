<template>
<div class="uk-grid pk-grid-large" data-uk-grid-margin="">
    <div class="uk-flex-item-1 uk-form-horizontal uk-row-first">
        <div class="uk-form-row">
				<label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
				<div class="uk-form-controls">
					<input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title"
					       v-validate:required>
					<p class="uk-form-help-block uk-text-danger"
					   v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
				</div>
			</div>

<div v-for="panel in widget.data">

        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Header' | trans }}</label>
            <div class="uk-form-controls"><input type="text" class="uk-form-width-large" v-model="panel.header"></div>
            </div>
        
        <div class="uk-form-row">
            <label class="uk-form-label">{{ 'Text' | trans}}</label>
            <div class="uk-form-controls uk-form-width-large"><textarea rows=7 type=text v-model= "panel.text" class= "uk-width-1-1 uk-form-width-large"></textarea></div>
        </div>
        
    <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Image' | trans }}</label>
        <div class="uk-form-controls uk-form-width-large"><input-image-meta :image.sync="panel.image" class="pk-image-max-height"></input-image-meta></div>
    </div>
    
     <div class="uk-form-row">
        <label class="uk-form-label">{{ 'Link' | trans }}</label>
        <div class="uk-form-controls uk-form-width-large">
        <input type="text" class="uk-form-width-large" v-model="panel.link" placeholder="Link text">
        <input-link class="uk-form-width-large" v-model="panel.url" :link.sync="panel.url"> </input-link></div>
    </div>
     </div>

    
</div>



<div class="pk-width-sidebar">
<partial name="settings"></partial>
</div>


</div>



</template>






<script>

    module.exports = {
       section: {
            label: 'Settings'
        },
        replace: false,
        props: ['widget', 'config', 'form'],
        data() {
            return {
            }
        },
        
         created() {
            this.$options.partials = this.$parent.$options.partials;
        }

    };
     

    window.Widgets.components['brightday-panelbox:settings'] = module.exports;

</script>