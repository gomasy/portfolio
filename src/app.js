import { h, app } from 'hyperapp';

const Profile = ({ icon, name }) => (
    <profile>
        <img id="icon" src={icon} />
        <span id="name">{name}</span>
    </profile>
);

const Buttons = ({ items }) => {
    const buttonItems = [];
    for (let i = 0; i < items.length; i++) {
        buttonItems.push(
            <a class="btn" id={'btn-' + items[i]['id']} href={items[i]['href']}>{items[i]['name']}</a>
        );
    }

    return (
        <buttons>
            {buttonItems}
        </buttons>
    );
};

const ModalWindow = ({ contents }) => (
    <modal-window>
        {contents}
        <a class="modal-close" href="#">[Close]</a>
    </modal-window>
);

const contents = (
    <modal-text>
        <p>I can't do anything.<br />
        Like: Arch Linux, Ruby, PHP, Vim</p>
        <p>Mail: <span className="hl-text">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br />
        PGP Key: <span class="hl-text">02BE 7F39 D978 AC7E</span></p>
    </modal-text>
);

export const state = {
    icon: require('./contents/icon.jpg'),
    name: 'Gomasy',
    buttons: [
        { id: 'about', name: 'About', href: '#about' },
        { id: 'blog', name: 'Blog', href: 'https://blog.gomasy.jp/' },
        { id: 'github', name: 'GitHub', href: 'https://github.com/Gomasy' },
        { id: 'twitter', name: 'Twitter', href: 'https://twitter.com/u597' },
        { id: 'skype', name: 'Skype', href: 'skype:ktomohiro365' },
    ],
};

export const view = state => (
    <app>
        <Profile icon={state.icon} name={state.name} />
        <Buttons items={state.buttons} />
        <ModalWindow contents={contents} />
    </app>
);
