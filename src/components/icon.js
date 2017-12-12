import React, { Component } from 'react';
import iconImage from '../contents/icon.jpg';

export default class Icon extends Component {
    render() {
        return (
            <div id="icon">
                <img id="icon-image" src={iconImage} />
                <span id="title">Gomasy</span>
            </div>
        );
    }
}
