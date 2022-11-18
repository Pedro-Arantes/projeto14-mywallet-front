import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { DataContext } from "../context/Auth";
import { MainStyled, FormStyled, BtnStyle } from '../style/EntOutStyle';
import axios from "axios";


export default function EntryPage() {

    const { data } = useContext(DataContext)
    const [value, setValue] = useState("")
    const [description, setDescr] = useState("")
    const navigate = useNavigate();
    const type = "positive"

    const submit = (e) => {
        SaveEntry();
        e.preventDefault();
        //navigate("/home")
    }

    const SaveEntry = () => {

        const obj = {
            value,
            description,
            type
        }
        const config = {
            headers: {
                Authorization: `Bearer ${data}`
            }
        }

        const tratarSucesso = (resposta) => {
            //console.log(resposta)  
            navigate("/home")
        }

        const tratarErro = (resp) => {
            //console.log(resp)
            alert(resp.response.data.message)
            navigate("/novaEntrada")
        }


        const requisicao = axios.post('http://localhost:5000/balance', obj, config);
        requisicao.then(tratarSucesso)
        requisicao.catch(tratarErro)



    }

    return (

        <MainStyled>
            <div>
                <h1>Nova Entrada</h1>
            </div>
            <FormStyled onSubmit={submit}>
                <input required placeholder='Valor' onChange={e => setValue(e.target.value)} value={value} type="number" minLength= "1" />
                <input required placeholder='Descrição' onChange={e => setDescr(e.target.value)} maxLength="16" minLength= "3" value={description} type="text" />

                <BtnStyle>Salvar entrada</BtnStyle>

            </FormStyled>
        </MainStyled>
    )

}