<?php require_once('./ua.php'); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="つらい">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gomasy's portfolio</title>
    <link rel="shortcut icon" href="./img/icon.png">
    <?= load_css(); ?>
    <link rel="stylesheet" href="./css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo">
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-54951000-1', 'auto');
      ga('send', 'pageview');
    </script>
  </head>
  <body>
    <div id="container">
      <img id="icon" src="./img/icon.png" alt="">
      <span id="title">Gomasy</span>
      <nav>
        <a class="btn" id="btn-about" href="#about">About me</a>
        <a class="btn" id="btn-blog" href="http://blog.gomasy.jp/" target="_blank">Blog</a>
        <a class="btn" id="btn-github" href="https://github.com/Gomasy" target="_blank">GitHub</a>
        <a class="btn" id="btn-twitter" href="https://twitter.com/u3g3" target="_blank">Twitter</a>
        <a class="btn" id="btn-skype" href="skype:ktomohiro365" target="_blank">Skype</a>
        <div class="modal-window" id="about">
          <div class="modal-text">
            <p>なにもできません（ガチ）</p>
            <p>すきなもの: Arch Linux, Ruby, Ingress<br>
            きらいなもの: 現実</p>
            <p>MAIL: <span id="mail-text">echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span></p>
          </div>
          <a class="modal-close" href="#">Close</a>
        </div>
      </nav>
    </div>
    <!-- Copyright 2014 Gomasy. All right reserved. -->
  </body>
</html>
