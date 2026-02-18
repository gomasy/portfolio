import * as THREE from 'three';
import vanta from 'vanta/dist/vanta.clouds.min';
import { track } from '@minimal-analytics/ga4';

// contents
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import './contents/style.scss';

// google analytics
track('G-VCTBDL25V3');

vanta({
    el: 'body',
    skyColor: 0xc8ceca,
    THREE: THREE,
});
