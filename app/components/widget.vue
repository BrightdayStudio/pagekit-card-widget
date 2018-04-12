<template>

    <div class="uk-grid pk-grid-large pk-width-sidebar-large" data-uk-grid-margin>
        <div class="pk-width-content uk-form-stacked">

            <div class="uk-form-row">

             <div class="uk-form-row">
                <label for="form-title" class="uk-form-label">{{ 'Title' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-title" class="uk-form-width-large" type="text" name="title" v-model="widget.title" v-validate:required>
                    <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>
                </div>
            </div>
             
             <div class="uk-form-row">
                    <label class="uk-form-label">{{ 'Image' | trans }}</label>
                    <div class="uk-form-controls">
                        <input-image-meta :image.sync="image" class="pk-image-max-height"></input-image-meta>
                    </div>
                </div>
                <div class="uk-form-row">
                    <label class="uk-form-label">{{ 'Header' | trans }}</label>
                    <div class="uk-form-controls">
                        <input type="text" class="uk-form-width-large" v-model="image.header">
                    </div>
                </div>
                <div class="uk-form-row">
                    <label class="uk-form-label">{{ 'Text' | trans}}</label>
                    <div class="uk-form-controls">
                        <v-editor :value.sync="image.text" :options="{markdown : post.data.markdown, height: 250}"></v-editor>
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
        props: ['widget', 'config', 'form']

    };
     

    window.Widgets.components['brightday-panelbox:settings'] = module.exports;

</script>