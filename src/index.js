import gaTrack from 'ganalytics';
import { app } from 'hyperapp';
import { state, view } from './app';

// contents
import './contents/style.scss';
import './contents/favicon.ico';

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);

// google analytics
const ga = new gaTrack('UA-54951000-1');
ga.send('pageview');

app({
    init: 0,
    view: () => view(state),
    node: document.querySelector('#app'),
});
