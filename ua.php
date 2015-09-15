<?php

function load_css() {
    $ua = filter_input(INPUT_SERVER, 'HTTP_USER_AGENT');
    if (preg_match('/MSIE\s[4-9]/', $ua) || ((isset($_GET['p'])) && ($_GET['p'] === 'ie'))) {
        return '<link rel="stylesheet" href="./css/style-ie.css">'."\n";
    } else {
        return '<link rel="stylesheet" href="./css/style.css">'."\n";
    }
}
