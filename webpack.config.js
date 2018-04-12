module.exports = [

    {
        entry: {
            "widget-thumbnails": "./app/components/widget.vue"
        },
        output: {
            filename: "./app/bundle/widget.js"
        },
        module: {
            loaders: [
                { test: /\.vue$/, loader: "vue" }
            ]
        }
    }

];
