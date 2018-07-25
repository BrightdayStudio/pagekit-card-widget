<?php

use Pagekit\Application;

return [
    'name' => 'card',

    'main' => function(Application $app) {

    },

    'autoload' => [
        'brightday\\card\\' => 'src'
    ],

    'resources' => [
        'card:' => ''
    ],

    'widgets' => [
        'widgets/card.php'
    ],

];
