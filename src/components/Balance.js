import { BalanceDiv,DtDescrDiv,ValueDiv} from "../style/BalanceStyle";

export default function Balance({ item }) {
    
    const {value,description,type,day} = item
    const cor = type === "negative" ? "red" :  "green"
    return (
        <>
            <BalanceDiv>
                    <DtDescrDiv>
                        <span>{day}</span>
                        <p>{description}</p>
                    </DtDescrDiv>
                    <ValueDiv cor = {cor}>{value}</ValueDiv>
            </BalanceDiv>
        </>

    )
}