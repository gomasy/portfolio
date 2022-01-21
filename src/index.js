import * as THREE from 'three';
import vanta from 'vanta/dist/vanta.clouds.min';
import gaTrack from 'ganalytics';
import { app } from 'hyperapp';
import { state, view } from './app';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

// Object.assign polyfill
import 'core-js/modules/es.object.assign';

// google analytics
const ga = new gaTrack('UA-54951000-1');
ga.send('pageview');

const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width';
document.head.appendChild(meta);

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

vanta({
  el: 'body',
  skyColor: 0xc8ceca,
  THREE: THREE,
});

app({
    init: 0,
    view: () => view(state),
    node: document.querySelector('#app'),
});
