import React, { Component } from 'react';

const items = [
    { id: 'about', name: 'About', href: '#about' },
    { id: 'blog', name: 'Blog', href: 'https://blog.gomasy.jp/' },
    { id: 'github', name: 'GitHub', href: 'https://github.com/Gomasy' },
    { id: 'twitter', name: 'Twitter', href: 'https://twitter.com/u597' },
    { id: 'skype', name: 'Skype', href: 'skype:ktomohiro365' },
];

export default class Buttons extends Component {
    render() {
        const buttonItems = [];
        for (let i = 0; i < items.length; i++) {
            buttonItems.push(
                <a className="btn" id={'btn-' + items[i]['id']} href={items[i]['href']}>{items[i]['name']}</a>
            );
        }

        return (
            <div id="buttons">
                {buttonItems}
            </div>
        );
    }
}
