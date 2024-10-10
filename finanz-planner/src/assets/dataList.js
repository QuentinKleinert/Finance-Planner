import DataItem from './dataItem'

export default function dataList({dataArray}){
    
    const nDataList = dataArray.map((dataItem) =>
        <DataItem name={dataItem.name} value={dataItem.value}></DataItem>
    );
    
    return(
        <>
            <ul>
                <li>{nDataList}</li>
            </ul>
        </>
    )
}