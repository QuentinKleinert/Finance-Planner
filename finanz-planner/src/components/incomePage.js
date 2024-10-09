import IncomeChart from "../assets/incomeChart";
import '../App.css';

const renderPage = false;
let arrayField = [];

function test(){
    
    console.log(arrayField);
    console.log('Länge: ' + arrayField.length);
}

// Eingabe bestätigen
function submitInput(){
    
    let contentName = document.getElementById("name").value;
    let contentValue = document.getElementById("value").value;

    if(contentName === ""){
        contentName = 'Default';
    }

    if(contentValue === ""){
        contentValue = 'Default';
    }

    arrayField.push({contentName, contentValue});
    console.log(arrayField);

    // setzt Eingabe zurück
    document.getElementById("name").value = "";
    document.getElementById("value").value = "";
}

// rendert wenn Eingabe getätigt wurde
function renderVisual(){

}

// Anzeige der Einkommenseite
    export default function incomePage(){
        return(
            <>
                <div id="incomeComponent">
                    <h1 id="header">Einkommen</h1>
                    <div id="inputField">
                        <div>
                            <label className="labelIncome">name of business:</label>
                            <input type="text" className="inputfield" id="name"></input>
                        </div>
                        <div>
                            <label className="labelIncome">income:</label>
                            <input type="text" className="inputfield" id="value"></input>
                        </div>
                        <input type="submit" value="confirm" id="confirm" onClick={submitInput}></input>
                        <input type="submit" value="test" onClick={test}></input>
                    </div>
                </div>
            </>
        )
    }
