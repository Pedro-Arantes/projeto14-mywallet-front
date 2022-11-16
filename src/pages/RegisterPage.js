import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import axios from "axios";
import { MainStyled, FormStyled, BtnStyle } from '../style/LogCadStyle';

export default function LoginPage() {


    return (
        <MainStyled>
            <h1>MyWallet</h1>
            <FormStyled>
                <input   required placeholder='Nome' type="text" />
                <input   required placeholder='E-mail' type="email" />
                <input  required placeholder='Senha'  type="password" />
                <input  required placeholder='Confirme a senha'  type="password" />
                <BtnStyle >Entrar</BtnStyle>
            </FormStyled>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </MainStyled>
    )
}