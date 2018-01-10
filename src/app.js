import { h } from 'hyperapp';

const Profile = ({ icon, name }) => (
    <div id="profile">
        <img src={icon} />
        <span>{name}</span>
    </div>
);

const Buttons = ({ openModal }) => (
    <div id="buttons">
        <a id="about" onclick={openModal}>About</a>
        <a id="blog" href="https://blog.gomasy.jp/">Blog</a>
        <a id="github" href="https://github.com/Gomasy">GitHub</a>
        <a id="twitter" href="https://twitter.com/u597">Twitter</a>
        <a id="skype" href="skype:ktomohiro365">Skype</a>
    </div>
);

const ModalWindow = ({ state, closeModal }) => (
    <div class={state} id="modal-window">
        <div id="modal-text">
            <p>なにもできません。<br />
            Like: Arch Linux, Ruby, PHP, Vim</p>
            <p>Mail: <span class="hl">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br />
            PGP Key: <span class="hl">02BE 7F39 D978 AC7E</span></p>
        </div>
        <a id="modal-close" onclick={closeModal}>[Close]</a>
    </div>
);

export const state = {
    icon: require('./contents/icon.jpg'),
    name: 'Gomasy',
    modal: 'hide',
};

export const actions = {
    open: () => state => ({ modal: 'show' }),
    close: () => state => ({ modal: 'hide' }),
};

export const view = (state, actions) => (
    <div id="container">
        <Profile icon={state.icon} name={state.name} />
        <Buttons openModal={actions.open} />
        <ModalWindow state={state.modal} closeModal={actions.close} />
    </div>
);
