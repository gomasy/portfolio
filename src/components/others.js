import { h } from 'hyperapp';
import { Header } from './header';

export const Others = () =>
    <div class="others">
        <Header text="Others" />
        <div class="others-container">
            <Other icon="&#xf09e;" text="Server Statuses" href="https://status.gomasy.jp/" />
        </div>
    </div>

export const Other = ({ icon, text, href }) =>
    <div class="other">
        <a href={href} target="_blank">
            <i>{icon}</i>
            {text}
        </a>
    </div>
