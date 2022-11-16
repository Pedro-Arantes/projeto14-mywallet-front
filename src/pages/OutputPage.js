import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { MainStyled, FormStyled, BtnStyle } from '../style/EntOutStyle';
import axios from "axios";


export default function OutputPage() {

    return (

        <MainStyled>
            <div>
                <h1>Nova Saída</h1>
            </div>
            <FormStyled>
                <input required placeholder='Valor' type="email" />
                <input required placeholder='Descrição' type="password" />
                <Link to='/home'>
                    <BtnStyle>Salvar saída</BtnStyle>
                </Link>
            </FormStyled>
        </MainStyled>
    )

}