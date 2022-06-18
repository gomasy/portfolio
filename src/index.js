import * as THREE from 'three';
import vanta from 'vanta/dist/vanta.clouds.min';
import { track } from '@minimal-analytics/ga4';
import { app } from 'hyperapp';
import { state, view } from './app';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

// google analytics
track('G-VCTBDL25V3');

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
