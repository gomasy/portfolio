import { app } from 'hyperapp';
import { state, view } from './app';
import './gtag';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1';
document.head.appendChild(meta);

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

app(state, null, view, document.getElementById('app'));
