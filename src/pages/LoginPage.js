import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from "axios";
import { MainStyled, FormStyled, BtnStyle } from '../style/LogCadStyle';

export default function LoginPage() {

    const navigate = useNavigate();

    const submit = (e) => {
        //VerificaLogin();
        e.preventDefault();
        navigate("/home")
    }


    return (
        <MainStyled>
            <h1>MyWallet</h1>
            <FormStyled onSubmit={submit}>
                <input   required placeholder='E-mail' type="email" />
                <input  required placeholder='Senha'  type="password" />
                <BtnStyle >Entrar</BtnStyle>
            </FormStyled>
            <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
        </MainStyled>
    )
}