import { h, app } from 'hyperapp';
import { state, view } from './app';
import './gtag';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

const root = document.createElement('div');
root.id = 'main';
document.body.appendChild(root);

app(state, null, view, document.getElementById('main'));
