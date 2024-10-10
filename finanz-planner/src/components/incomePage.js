import IncomeChart from "../assets/incomeChart";
import DataList from "../assets/dataList"
import '../App.css';

const renderPage = false;
let arrayField = [
    {name: "Business1", value: 540 },
    {name: "Business2", value: 678 },
    {name: "Business3", value: 800 },
];

function test(){
    
    console.log(arrayField);
    console.log('Länge: ' + arrayField.length);
}

// löschen aller Einträge
function deleteAll(){
    while(arrayField.length){
        arrayField.pop();
    }
}

// löschen des letzten Eintrages
function deleteLast(){
    arrayField.pop();
}

// Eingabe bestätigen
function submitInput(){
    
    let contentName = document.getElementById("name").value;
    let contentValue = document.getElementById("value").value;

    if(contentName === "" || contentValue === "" ){
        alert("Bitte valide Eingabe machen | Name => Text | Einkommen => Fließkommazahl")
    } else {
        arrayField.push({contentName, contentValue});
        console.log(arrayField);

        // setzt Eingabe zurück
        document.getElementById("name").value = "";
        document.getElementById("value").value = "";
    }

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
                        <input type="submit" value="delete last item" onClick={deleteLast} ></input>
                        <input type="submit" value="delete all" onClick={deleteAll} ></input>
                        <p></p>

                        <div id="tableChart">
                            <IncomeChart dataInput={arrayField} id="incomeChart"></IncomeChart>
                            <DataList dataArray={arrayField} id="dataList"></DataList>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
