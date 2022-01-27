import { info } from "autoprefixer"
import useResource from "../hooks/useResource";

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
            {props.standInfo.location} <button onClick={clickDelete}>[X]</button>
        </td>
        {props.standInfo.hourly_sales.map((sale, index) => (<td key={index} className="m-2 w-8 border">{sale}</td>))}
        <td className="m-2 w-8 border">{props.totalSales(props.standInfo.hourly_sales)}</td>
    
    </tr>
    )
}