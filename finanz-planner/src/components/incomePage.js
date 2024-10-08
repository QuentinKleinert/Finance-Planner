import IncomeChart from "../assets/incomeChart";

// Anzeige der Einkommenseite
export default function incomePage({income}){
    return(
        <>
            <h1>Einkommen</h1>
            <p>Monatseinkommen: {income} $</p>
            <IncomeChart></IncomeChart>
        </>
    )
}
