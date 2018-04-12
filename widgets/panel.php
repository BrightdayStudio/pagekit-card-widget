<?php

use Pagekit\Application as App;

return [
    'name' => 'brightday/panelbox',

    'label' => 'Panel Box',

    'events' => [
        'view.scripts' => function ($event, $scripts) use ($app) {

            $scripts->register('widget', 'widget:app/bundle/widget.js', ['~widgets']);
        }
    ],

    'render' => function ($widget) use ($app) {
        $images = $widget->get('images');
        $config = $widget->get('config');

        if($images == null) $images = [];

        return $app->view('widget/panel.php', compact('images', 'config'));
    }
];