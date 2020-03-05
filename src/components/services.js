import { h } from 'hyperapp';
import { Header } from './header';

export const Services = () =>
    <div class="services">
        <Header text="Services" />
        <div class="services-container">
            <Service icon="&#xf781;" text="Blog" href="https://blog.gomasy.jp/" />
            <Service icon="&#xf4f6;" text="Mastodon Server (don.gomasy.jp)" href="https://don.gomasy.jp/about/more" />
            <Service icon="&#xf187;" text="Arch Linux Repository" href="https://repos.gomasy.jp/os/x86_64/" />
        </div>
    </div>

export const Service = ({ icon, text, href }) =>
    <div class="service">
        <a href={href} target="_blank">
            <i>{icon}</i>
            {text}
        </a>
    </div>
