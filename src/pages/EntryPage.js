import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { MainStyled, FormStyled, BtnStyle } from '../style/EntOutStyle';
import axios from "axios";


export default function EntryPage() {

    return (

        <MainStyled>
            <div>
                <h1>Nova Entrada</h1>
            </div>
            <FormStyled>
                <input required placeholder='Valor' type="text" />
                <input required placeholder='Descrição' type="text" />
                <Link to='/home'>
                    <BtnStyle>Salvar entrada</BtnStyle>
                </Link>
            </FormStyled>
        </MainStyled>
    )

}