<?php

function load_css() {
  $ua = $_SERVER['HTTP_USER_AGENT'];
  if (preg_match('/MSIE\s[4-9]/', $ua) || ($_GET['p'] === 'ie')) {
    return '<link rel="stylesheet" href="./css/style-ie.css">'."\n";
  } else if (preg_match('/Android\s2.[1-3]/', $ua) || ($_GET['p'] === 'min')) {
    return '<link rel="stylesheet" href="./css/style-min.css">'."\n";
  } else {
    return '<link rel="stylesheet" href="./css/style.css">'."\n";
  }
}
