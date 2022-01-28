export default function StandRow(props){
    
    function clickDelete(){
        props.deleteStand(props.standInfo.id)
    }

    if (props.standInfo.hourly_sales.length == 0) {
        props.standInfo.hourly_sales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
    }

    return (
    <tr>

        <td className="m-2 w-8 border" type="text">
        
            {props.standInfo.location} 
        
            <button onClick={clickDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        
        </td>
        
        {props.standInfo.hourly_sales.map((sale, index) => (
        <td key={index} className="m-2 w-8 border"> {sale}</td>))}
        
        <td className="m-2 w-8 border">
            {props.totalSales(props.standInfo.hourly_sales)}
        </td>
    
    </tr>
    )
}