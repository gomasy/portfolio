import gaTrack from 'ganalytics';
import { app } from 'hyperapp';
import { state, actions, view } from './app';

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

// google analytics
const ga = new gaTrack('UA-54951000-1');
ga.send('pageview');

app(state, actions, view, document.getElementById('app'));
