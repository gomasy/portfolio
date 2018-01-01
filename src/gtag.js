/* Global site tag (gtag.js) - Google Analytics */
const trackingId = 'UA-54951000-1';
const ga = document.createElement('script');
ga.async = true;
ga.src = '//www.googletagmanager.com/gtag/js?id=' + trackingId;

const s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

gtag('js', new Date());
gtag('config', trackingId);
