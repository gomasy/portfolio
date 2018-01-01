import { h } from 'hyperapp';

const Profile = ({ icon, name }) => (
    <div id="profile">
        <img id="icon" src={icon} />
        <span id="name">{name}</span>
    </div>
);

const Buttons = ({ items }) => {
    const buttonItems = [];
    for (let i = 0; i < items.length; i++) {
        const id = 'btn-' + items[i]['id'];
        const name = items[i]['name'];
        const href = items[i]['href'];

        buttonItems.push(
            <a class="btn" id={id} href={href}>{name}</a>
        );
    }

    return (
        <div id="buttons">
            {buttonItems}
        </div>
    );
};

const ModalWindow = ({ id, contents }) => (
    <div class="modal-window" id={id}>
        {contents}
        <a class="modal-close" href="#">[Close]</a>
    </div>
);

const contents = (
    <div class="modal-text">
        <p>なにもできません。<br />
        Like: Arch Linux, Ruby, PHP, Vim</p>
        <p>Mail: <span class="hl-text">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br />
        PGP Key: <span class="hl-text">02BE 7F39 D978 AC7E</span></p>
    </div>
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
    modalId: 'about',
};

export const view = state => (
    <div id="container">
        <Profile icon={state.icon} name={state.name} />
        <Buttons items={state.buttons} />
        <ModalWindow id={state.modalId} contents={contents} />
    </div>
);
