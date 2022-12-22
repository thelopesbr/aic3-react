import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <body>
            <div className='header'>
                <h1>PADEL LIFE</h1>

                <Link to="/login" className='link'>Login</Link>
                <Link to="/" className='link'>Register</Link>
            </div>

            <div className='main'>
                <h2>O que é o Padel Life?</h2>
                <p>Padel Life é um aplicativo da web que permite gerenciar suas partidas e torneios de padel.</p>
                <p>É uma ferramenta que vai te ajudar a organizar suas partidas e torneios e acompanhar os resultados.</p>
                <p>É também uma ferramenta que o ajudará a encontrar novos jogadores.</p>

                <p><Link to="/login" className='link-main'>Login</Link></p>
            </div>

            <div className='footer'>
                <span>Desenvolvido por Jeferson, Gregory, Matheus, Raphael, Alan e Murilo</span>
            </div>                
        </body>
    );
};
