import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from 'react';
import { DataContext } from "../context/Auth";
import { MainStyled, ArticleBalance, ArticleBalanceEmpty, DivTitle, EntryOutputDiv, TotalDiv, BalanceCollection } from '../style/HomeStyle';
import logout from '../assets/Vector.png'
import axios from "axios";
import Balance from "../components/Balance";


export default function HomePage() {

    const { data } = useContext(DataContext)
    const [balances, setBalance] = useState([])
    const [total, setTotal] = useState("")
    const [color, setColor] = useState("")
    const [user, setUser] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const GetBalance = () => {

            console.log(data)
            const config = {
                headers: {
                    Authorization: `Bearer ${data}`
                }
            }

            const tratarSucesso = (resposta) => {
                console.log(resposta.data)
                const dataArray = resposta.data.balance
                setBalance(dataArray)
                setUser(resposta.data.user)
            }

            const tratarErro = (resp) => {
                console.log(resp)
                alert(resp.response.data)
                navigate("/")
                window.location.reload()
            }


            const requisicao = axios.get('http://localhost:5000/balance', config);
            requisicao.then(tratarSucesso)
            requisicao.catch(tratarErro)

        }
        
        GetBalance()

    }, [data])

    useEffect(() => {
        const interval = setInterval(() => {
            let  tot = 0
            
            for (let i = 0; i < balances.length; i++) {
                const e = balances[i];
                if (e.type === "negative") {
                    tot = tot - Number(e.value)
                }else{
                    tot = Number(e.value) + tot
                }
                
            }
            if (tot>0) {
                setColor("green")
            }else if(tot === 0){
                setColor("black")
            }else{
                setColor("red")
            }
            tot = tot.toFixed(2).toString().replace(".",",")
            setTotal(tot)
        }, 1000);
        return () => clearInterval(interval);
      }, [total]);

    
    const LogOut= () => {

   
        const config = {
            headers: {
                Authorization: `Bearer ${data}`
            }
        }

        const tratarSucesso = (resposta) => {
            navigate("/")
            window.location.reload()
        }

        const tratarErro = (resp) => {
            
            alert(resp.response.data)
            navigate("/")
            window.location.reload()
        }


        const requisicao = axios.delete('http://localhost:5000/delete', config);
        requisicao.then(tratarSucesso)
        requisicao.catch(tratarErro)

    }
    

    return (

        <MainStyled>
            <DivTitle>
                <h1>{`Olá,${user}`}</h1>
                
                <img onClick={LogOut} src={logout} />
                
            </DivTitle>

            {balances.length <= 0 ? <ArticleBalanceEmpty >
                <p>Não há registros de
                    entrada ou saída</p>
            </ArticleBalanceEmpty> :
                <ArticleBalance>
                    <BalanceCollection>
                        {balances.map((item, id) => <Balance key={id} item={item} />)}
                    </BalanceCollection>

                    <TotalDiv cor ={color}>
                        <span>SALDO</span>
                        <p>{total}</p>
                    </TotalDiv>
                </ArticleBalance>}
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