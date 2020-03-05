import { h } from 'hyperapp';
import { Header } from './header';

export const Accounts = () =>
    <div class="accounts">
        <Header text="Accounts" />
        <div class="accounts-container">
            <Account icon="&#xf781;" text="Blog" href="https://blog.gomasy.jp/" />
            <Account icon="&#xf09b;" text="GitHub" href="https://github.com/Gomasy" />
            <Account icon="&#xf4f6;" text="Mastodon" href="https://don.gomasy.jp/@gomasy" />
            <Account icon="&#xf099;" text="Twitter (local only)" href="https://twitter.com/u597" />
            <Account icon="&#xf1b6;" text="Steam" href="https://steamcommunity.com/id/gomasy" />
        </div>
    </div>

export const Account = ({ icon, text, href }) =>
    <div class="account">
        <a href={href} target="_blank">
            <i>{icon}</i>
            {text}
        </a>
    </div>
