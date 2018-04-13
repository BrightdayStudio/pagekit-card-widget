<?php

use Pagekit\Application;

return [
    'name' => 'panelbox',

    'main' => function(Application $app) {

    },

    'autoload' => [
        'brightday\\panelbox\\' => 'src'
    ],

    'resources' => [
        'panelbox:' => ''
    ],
    
    'routes' => [
        '/panelbox' => [
            'name' => '@panelbox',
            'controller' => 'brightday\\panelbox\\Controller\\panelboxController'
        ]
    ],

    'widgets' => [
        'widgets/panel.php'
    ],
];