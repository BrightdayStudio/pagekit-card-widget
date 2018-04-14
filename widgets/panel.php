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
        $panel = $widget->get('panel');
        $config = $widget->get('config');

        if($panel == null) $panel = [];

        return $app->view('panelbox:views/widget/panel.php', compact('panel', 'config'));
    }
];