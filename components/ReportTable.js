import { data } from "autoprefixer";
import { hours } from "../data";

export default function ReportTable(props) {
  
  
  const openHours = hours.map((time) => ( <th key={time} className="w-12">{time}</th>))
  
  
  function totalSales(sales) {
    var total = sales.reduce(add, 0);
    function add(acc, a) {
      return acc + a;
    }
    return total;
  }
  

function lastRowTotals(data){
  console.log(data[0].hourlySale)
  let grandArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  for (let i = 0; i < data.length; i++) {
    let currentStand = data[i]
    for (let j = 0; j < currentStand.hourlySale.length; j++){
      grandArray[j] += currentStand.hourlySale[j]
    } 
  } return grandArray
}






  if (props.data.length == 0) {
    return (
      <div className="flex items-center justify-center m-7">
        <h2 className="p-4">No Cookie Stands Available</h2>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center m-5">
        <table className="bg-green-500">
          
          <thead className="border font-bold">
            <tr>
              <th className="p-2">Location</th>
              {openHours}
              <th className="m-2 w-8 text-center">Totals</th>
            </tr>
          </thead>

          <tbody className="border text-center">
                     
              {props.data.map((stand) => (
                
                <tr key={stand.id}>

                  <td key={stand.id} className="m-2 w-8 border" type="text">
                    {stand.location}
                  </td>
                  {stand.hourlySale.map(sale => (<td key={stand.id} className="m-2 w-8 border">{sale}</td>))}
                  <td key={stand.id} className="m-2 w-8 border">{totalSales(stand.hourlySale)}</td>

                </tr>
                ))}
          
          </tbody>

          <tr>
            <td className="font-bold text-center" type="integer">Totals</td>
            {lastRowTotals(props.data).map(sale => (
              <td key={sale.id} className="m-2 w-8 border text-center" type="integer">{sale}</td>
            ))}
            <td className="m-2 w-8 border text-center" type="integer">{totalSales((lastRowTotals(props.data)))}</td>
          </tr>
        </table>
      </div>
    );
  }
}

// need to get location and hourly_sales data from a report
