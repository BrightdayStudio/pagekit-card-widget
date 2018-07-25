module.exports = [

    {
        entry: {
            "widget-card": "./app/components/widget.vue"
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
