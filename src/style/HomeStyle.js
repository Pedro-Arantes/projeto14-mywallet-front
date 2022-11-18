import styled from 'styled-components';


export const MainStyled = styled.main `

height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`
export const ArticleBalanceEmpty = styled.article`
width: 326px;
height: 446px;
background-color: white;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

border-radius: 5px;

p{
    text-overflow: clip;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    word-wrap: break-word;
    font-size: 20px;

    width: 180px;

    color: #868686;
}

`
export const ArticleBalance = styled.article`
width: 326px;
height: 446px;
background-color: white;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;

border-radius: 5px;

padding: 15px;

`
export const DivTitle = styled.div`

color: white;
font-size: 26px;
font-weight: 700;

width: 326px;

display: flex;
justify-content: space-between;

margin-bottom: 22px;
`

export const EntryOutputDiv = styled.div `

width: 326px;

margin-top: 13px;
display: flex;
justify-content: space-between;

div{
    height: 114px;
    width: 155px;
    background-color: #52B6FF;

    border-radius: 5px;
    border-style: none;

    font-size: 19px;
    color: white;
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
ion-icon{
    font-size: 26px;
    color: white;
}
p{
    text-overflow: clip;
    
    word-wrap: break-word;

    width: 70px;
}
a{
    text-decoration: none;
}
`
export const TotalDiv = styled.div`
font-size: 17px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
span{
    
    font-weight: 700;
}
p{
    font-weight: 400;
    color: ${props => props.cor};
}

`
export const BalanceCollection = styled.div `

width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
`