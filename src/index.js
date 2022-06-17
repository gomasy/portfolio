import * as THREE from 'three';
import vanta from 'vanta/dist/vanta.clouds.min';
import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import { app } from 'hyperapp';
import { state, view } from './app';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

// google analytics
const analytics = Analytics({
    app: 'Gomasy\'s portfolio',
    plugins: [
        googleAnalytics({
            trackingId: 'G-6DJ4FZDJP5',
        })
    ],
})
analytics.page();

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
