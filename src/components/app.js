import React, { Component } from 'react';
import Icon from './icon';
import Buttons from './buttons';
import ModalWindow from './modal-window';

export default class App extends Component {
    render() {
        return (
            <div id="container">
                <Icon />
                <Buttons />
                <ModalWindow />
            </div>
        );
    }
}
