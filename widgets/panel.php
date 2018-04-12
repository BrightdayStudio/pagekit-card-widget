<?php

use Pagekit\Application as App;

return [
    'name' => 'brightday/panelbox',

    'label' => 'PanelBox',

    'events' => [
        'view.scripts' => function ($event, $scripts) use ($app) {

            $scripts->register('panelbox', 'panelbox:app/bundle/widget.js', ['~widgets']);
        }
    ],

    'render' => function ($widget) use ($app) {
        $images = $widget->get('images');
        $config = $widget->get('config');

        if($images == null) $images = [];

        return $app->view('panelbox:views/widget/panel.php', compact('images', 'config'));
    }
];