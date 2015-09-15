<?php
  header("HTTP/1.1 418 I'm a teapot");
  $ua = $_SERVER['HTTP_USER_AGENT'] ?: '';
?><html>
<head><title>418 I'm a teapot</title></head>
<body bgcolor="white">
<center><h1>418 I'm a teapot</h1></center>
<hr><center>nginx</center>
</body>
</html>
<?php if ((preg_match('/MSIE\s.+?/', $ua)) || (preg_match('/Chrome\/.+?/', $ua))) { ?>
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<?php } ?>
