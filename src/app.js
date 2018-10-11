import { h } from 'hyperapp';

const Profile = ({ icon, name }) => (
    <div class="profile">
        <img src={icon} />
        <span>{name}</span>
    </div>
);

const Buttons = ({ openModal }) => (
    <div class="buttons">
        <a class="about" onclick={openModal}>About</a>
        <a class="blog" href="https://blog.gomasy.jp/">Blog</a>
        <a class="github" href="https://github.com/Gomasy">GitHub</a>
        <a class="mastodon" href="https://don.gomasy.jp/@gomasy">Mastodon</a>
        <a class="skype" href="skype:ktomohiro365">Skype</a>
    </div>
);

const ModalWindow = ({ state, closeModal }) => (
    <div class="modal-window" id={state}>
        <div class="modal-text">
            <p>なにもできません。<br />
            Like: Arch Linux, Ruby, PHP, Vim</p>
            <p>Mail: <span class="hl">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br />
            PGP Key: <span class="hl">02BE 7F39 D978 AC7E</span></p>
        </div>
        <a class="modal-close" onclick={closeModal}>[Close]</a>
    </div>
);

export const state = {
    icon: require('./contents/icon.jpg'),
    name: 'Gomasy',
    modal: '',
};

export const actions = {
    open: () => state => ({ modal: 'show' }),
    close: () => state => ({ modal: '' }),
};

export const view = (state, actions) => (
    <div class="container">
        <Profile icon={state.icon} name={state.name} />
        <Buttons openModal={actions.open} />
        <ModalWindow state={state.modal} closeModal={actions.close} />
    </div>
);
