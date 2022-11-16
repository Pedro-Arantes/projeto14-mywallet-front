import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { MainStyled, ArticleBalance, DivTitle, EntryOutputDiv } from '../style/HomeStyle';
import logout from '../assets/Vector.png'
import axios from "axios";


export default function HomePage() {


    return (

        <MainStyled>
            <DivTitle>
                <h1>Olá,Fulano</h1>
                <Link to='/'>
                    <img src={logout} />
                </Link>  
            </DivTitle>

            <ArticleBalance>
                <p>Não há registros de
                    entrada ou saída</p>
            </ArticleBalance>
            <EntryOutputDiv>
                <Link to='/novaEntrada'>
                    <div>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <p>Nova
                            entrada</p>
                    </div>
                </Link>
                <Link to='/novaSaida'>
                    <div>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <p>Nova
                            saída</p>
                    </div>
                </Link>
            </EntryOutputDiv>

        </MainStyled>
    )
}