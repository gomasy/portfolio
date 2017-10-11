require('font-awesome/scss/font-awesome.scss');
require('./style.scss');

/* Global site tag (gtag.js) - Google Analytics */
var trackingId = 'UA-54951000-1';
var ga = document.createElement('script');
ga.async = true;
ga.src = '//www.googletagmanager.com/gtag/js?id=' + trackingId;

var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', trackingId);
