import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { DataContext } from "../context/Auth";
import axios from "axios";
import { MainStyled, FormStyled, BtnStyle } from '../style/LogCadStyle';

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [status, setStatus] = useState(false)
    const { setData } = useContext(DataContext)
    const navigate = useNavigate();

    const submit = (e) => {
        VerificaLogin();
        e.preventDefault();
        //navigate("/home")
    }

    const VerificaLogin = () => {

        const obj = {
            email: email,
            password: senha
        }

        const tratarSucesso = (resposta) => {

            const token = resposta.data.token
            console.log(resposta)
            setData(token)
            
            navigate("/home")
        }

        const tratarErro = (resp) => {

            alert(resp.response.data.message)
            setStatus(false)
            setEmail("")
            setSenha("")

        }


        const requisicao = axios.post('http://localhost:5000/sign-in', obj);
        requisicao.then(tratarSucesso)
        requisicao.catch(tratarErro)
        setStatus(true)

    }


    return (
        <MainStyled>
            <h1>MyWallet</h1>
            <FormStyled onSubmit={submit}>
                <input   required disabled={status} onChange={e => setEmail(e.target.value)}  value={email} placeholder='E-mail' type="email" />
                <input  required placeholder='Senha' onChange={e => setSenha(e.target.value)}  value={senha} type="password" />
                <BtnStyle >Entrar</BtnStyle>
            </FormStyled>
            <Link to='/cadastro'>Primeira vez? Cadastre-se!</Link>
        </MainStyled>
    )
}