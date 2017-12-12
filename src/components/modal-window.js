import React, { Component } from 'react';

export default class ModalWindow extends Component {
    render() {
        return (
            <div className="modal-window" id="about">
                <div className="modal-text">
                    <p>I can't do anything.<br />
                    Like: Arch Linux, Ruby, PHP, Vim</p>
                    <p>Mail: <span className="hl-text">$ echo 'bnlhbkBnb21hc3kuanA=' | base64 -d</span><br />
                    PGP Key: <span class="hl-text">02BE 7F39 D978 AC7E</span></p>
                </div>
                <a className="modal-close" href="#">[Close]</a>
            </div>
        );
    }
}
