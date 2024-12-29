import * as THREE from 'three';
import vanta from 'vanta/dist/vanta.clouds.min';
import { track } from '@minimal-analytics/ga4';

// contents
import './contents/style.scss';
import './contents/favicon.ico';
import './contents/icon.jpg';

// google analytics
track('G-VCTBDL25V3');

vanta({
    el: 'body',
    skyColor: 0xc8ceca,
    THREE: THREE,
});
