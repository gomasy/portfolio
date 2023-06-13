import { h } from 'hyperapp';
import { Header } from './header';

export const Accounts = () =>
    <div class="accounts">
        <Header text="Accounts" />
        <div class="accounts-container">
            <Account icon="&#xf09b;" text="GitHub" href="https://github.com/Gomasy" />
            <Account icon="&#xf17e;" text="Skype" href="skype:ktomohiro365" />
            <Account icon="&#xf1b6;" text="Steam" href="https://steamcommunity.com/id/gomasy" />
            <Account icon="&#xf392;" text="Discord" href="javascript:alert('@gomasy');" />
            <Account icon="&#xf4f6;" text="Mastodon (don.gomasy.jp)" href="https://don.gomasy.jp/@gomasy" />
            <Account icon="&#xf099;" text="Twitter (local only)" href="https://twitter.com/u597" />
        </div>
    </div>

export const Account = ({ icon, text, href }) =>
    <div class="account">
        <a href={href} target="_blank">
            <i>{icon}</i>
            {text}
        </a>
    </div>
