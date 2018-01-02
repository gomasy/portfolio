import { h } from 'hyperapp';

const Profile = ({ icon, name }) => (
    <div id="profile">
        <img id="icon" src={icon} />
        <span id="name">{name}</span>
    </div>
);

const Button = ({ id, name, href }) => (
    <a class="btn" id={'btn-' + id} href={href}>{name}</a>
);

const Buttons = ({ openModal }) => (
    <div id="buttons">
        <a class="btn" id="btn-about" onclick={openModal}>About</a>
        <Button id="blog" name="Blog" href="https://blog.gomasy.jp/" />
        <Button id="github" name="GitHub" href="https://github.com/Gomasy" />
        <Button id="twitter" name="Twitter" href="https://twitter.com/u597" />
        <Button id="skype" name="Skype" href="skype:ktomohiro365" />
    </div>
);

const ModalWindow = ({ state, closeModal }) => (
    <div class={state} id="modal-window">
        <div id="modal-text">
            <p>なにもできません。<br />
            Like: Arch Linux, Ruby, PHP, Vim</p>
            <p>Mail: <span class="hl-text">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br />
            PGP Key: <span class="hl-text">02BE 7F39 D978 AC7E</span></p>
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
