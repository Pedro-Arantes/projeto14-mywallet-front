import styled from 'styled-components';

export const  BalanceDiv = styled.div`
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;
font-size: 16px;

`
export const DtDescrDiv = styled.div`
display: flex;
gap: 10px;
p{
    color: black;
    font-size: 16px;
}
span{
    color: #C6C6C6;
}
`
export const ValueDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.cor};
`