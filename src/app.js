require('font-awesome/scss/font-awesome.scss');
require('./style.scss');

/* Global site tag (gtag.js) - Google Analytics */
var ga = document.createElement('script');
ga.async = true;
ga.src = '//www.googletagmanager.com/gtag/js?id=UA-54951000-1';

var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', 'UA-54951000-1');
