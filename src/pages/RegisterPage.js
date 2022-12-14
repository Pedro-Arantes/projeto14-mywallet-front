import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { MainStyled, FormStyled, BtnStyle } from '../style/LogCadStyle';

export default function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConf, setConf] = useState('')
    const [status, setStatus] = useState(false)

    const navigate = useNavigate();
    const submit = (e) => {
        VerificaCadastro();
        e.preventDefault();
        //navigate("/")
    }

    const VerificaCadastro = () => {

        if (senha === senhaConf) {
            const obj = {
                name: name,
                email: email,
                password: senha
            }
    
            const tratarSucesso = (resposta) => {
                
    
                navigate("/")
    
            }
            const tratarErro = (resp) => {
                console.log(resp)
                alert(resp.response.data)
                setStatus(false)
                setEmail("")
                setName('')
                setSenha('')
                setConf('')
            }
    
    
            const requisicao = axios.post('http://localhost:5000/sign-up', obj);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)
            setStatus(true)
        }else{
            alert("As Senhas não coincidem!,favor confirmar a senha corretamente")
            setSenha("")
            setConf("")
        }

        
    }

    return (
        <MainStyled>
            <h1>MyWallet</h1>
            <FormStyled onSubmit={submit}>
                <input required placeholder='Nome' onChange={e => setName(e.target.value)} disabled={status} value={name} type="text" minLength="3" />

                <input required placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email} disabled={status} type="email" maxLength="25" minLength="11" />

                <input required placeholder='Senha' onChange={e => setSenha(e.target.value)} disabled={status} value={senha} type="password" maxLength="25" minLength="3"/>

                <input required  onChange={e => setConf(e.target.value)} disabled={status} value={senhaConf} placeholder='Confirme a senha' type="password" maxLength="25" minLength="3"/>

                <BtnStyle >Cadastrar</BtnStyle>
            </FormStyled>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </MainStyled>
    )
}