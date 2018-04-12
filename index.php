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
    

    'widgets' => [
        'widgets/panel.php'
    ],
];