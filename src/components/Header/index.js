import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                </a>                              
            </div>
            <div className="header--logo--min">
                <a href="/">
                    <img src=" https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="Netflix"></img>
                </a> 
            </div>
            <div className="header--menu">
                <ul className="header--menu-list">
                    <li><strong>Início</strong></li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha Lista</li>
                </ul>
                <ul className="header--menu-list-min">
                    <li><strong>Séries</strong></li>
                    <li>Filmes</li>
                    <li>+ Minha Lista</li>
                </ul>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"></img>
                </a>
            </div>

        </header>
    );
}