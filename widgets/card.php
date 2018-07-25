<?php

use Pagekit\Application as App;

return [
    'name' => 'brightday/card',

    'label' => 'Card',

    'events' => [
        'view.scripts' => function ($event, $scripts) use ($app) {
            $scripts->register('card', 'card:app/bundle/widget.js', ['~widgets']);
        }
    ],

    'render' => function ($widget) use ($app) {
        $card = $widget->get('card');
        $config = $widget->get('config');

        if($card == null) $card = [];

        return $app->view('card:views/widget/card.php', compact('card', 'config'));
    }
];
