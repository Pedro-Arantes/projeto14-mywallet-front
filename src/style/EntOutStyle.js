import styled from 'styled-components';

export const MainStyled = styled.main`

height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;

margin-top: 25px;

gap: 15px;

img{
    width: 180px;
    height: 180px;
}
a{
    font-size: 14px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-weight: bolder;

}
h1{
    
    
    font-weight: 700;
    font-size: 26px;
    color: white;

    margin-bottom: 24px;
}
div{
    display: flex;
    justify-content: flex-start;

    width: 326px;
    margin-left: 18px;
}
`

export const FormStyled = styled.form`

display: flex;
flex-direction: column;
gap: 13px;

input{
    height: 58px ;
    width: 303px;
    border-radius: 5px;
    border-color: #D4D4D4;
    border-style: solid;
    border-width: 1px;

    font-size: 20px;
    padding: 10px;

    ::placeholder{
        color: #D4D4D4;
        
    }
    
}


`

export const BtnStyle = styled.button`
    
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    font-size: 21px;
    color: white;

    border-radius: 5px;
    border-style: none;

`