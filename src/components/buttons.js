import React, { Component } from 'react';

const buttonItems = [
    { id: 'about', name: 'About', src: '#about' },
    { id: 'blog', name: 'Blog', src: 'https://blog.gomasy.jp/' },
    { id: 'github', name: 'GitHub', src: 'https://github.com/Gomasy' },
    { id: 'twitter', name: 'Twitter', src: 'https://twitter.com/u597' },
    { id: 'skype', name: 'Skype', src: 'skype:ktomohiro365' },
];

export default class Buttons extends Component {
    render() {
        const items = [];
        for (let i = 0; i < buttonItems.length; i++) {
            items.push(
                <a className="btn" id={'btn-' + buttonItems[i]['id']} href={buttonItems[i]['src']}>{buttonItems[i]['name']}</a>
            );
        }

        return (
            <div id="buttons">
                {items}
            </div>
        );
    }
}
