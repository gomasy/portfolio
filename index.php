<?php
$title = "Gomasy's portfolio";
$url = 'https://gomasy.jp';
$description = 'ごましぃのポートフォリオサイトです。目ぼしいものは何もないですよ、はい。';

?><!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#2c3e50">
        <meta name="description" content="<?= $description ?>">
        <!-- Social meta -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="<?= $title ?>">
        <meta property="og:url" content="<?= $url ?>">
        <meta property="og:description" content="<?= $description ?>">
        <meta property="og:image" content="<?= $url ?>/assets/icon.jpg">
        <meta property="og:site_name" content="<?= $title ?>">
        <!-- End of social meta -->
        <title>Gomasy's portfolio</title>
        <script src="./assets/bundle.js"></script>
    </head>
    <body>
        <div id="container">
            <div id="icon"></div>
            <span id="title">Gomasy</span>
            <nav>
                <a class="btn" id="btn-about" href="#about">About me</a>
                <a class="btn" id="btn-blog" href="https://blog.gomasy.jp/">Blog</a>
                <a class="btn" id="btn-github" href="https://github.com/Gomasy">GitHub</a>
                <a class="btn" id="btn-twitter" href="https://twitter.com/u597">Twitter</a>
                <a class="btn" id="btn-skype" href="skype:ktomohiro365">Skype</a>
                <div class="modal-window" id="about">
                    <div class="modal-text">
                        <p>I can't do anything.<br>
                        Like: Arch Linux, Ruby, PHP, Vim</p><br>
                        <p>MAIL: <span class="hl-text">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br>
                        PGP Key: <span class="hl-text">02BE 7F39 D978 AC7E</span></p>
                    </div>
                    <a class="modal-close" href="#">[Close]</a>
                </div>
            </nav>
        </div>
    </body>
</html>
<!-- Copyright 2014-2017 Gomasy. -->
<!-- https://github.com/Gomasy/portfolio -->
