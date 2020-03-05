import { h } from 'hyperapp';
import { Accounts, Account } from './components/accounts';
import { Services, Service } from './components/services';
import { Others, Other } from './components/others';
import Icon from './contents/icon.jpg';

export const state = {
    icon: Icon,
    name: 'Gomasy',
};

export const view = state =>
    <div class="container">
        <Avator icon={state.icon} name={state.name} />
        <Accounts />
        <Services />
        <Others />
    </div>

const Avator = ({ icon, name }) =>
    <div class="avator">
        <img src={icon} />
        <span>{name}</span>
    </div>
