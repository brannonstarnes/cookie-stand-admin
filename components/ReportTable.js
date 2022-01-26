import { data } from "autoprefixer";
import { hours } from "../data";
import stands from "../stands.json";

export default function ReportTable(props) {
  
  
  const openHours = hours.map((time) => ( <th key={time} className="w-12">{time}</th>))
  
  
  function totalSales(sales) {
    var total = sales.reduce(add, 0);
    function add(acc, a) {
      return acc + a;
    }
    return total;
  }
  

function lastRow(data){
  console.log(data[0].hourlySale)
  for (let i = 0; i < data[0].hourlySale.length; i++) {
    let grandTotal = 0
    for (let j = 0; j < data.length; j++){
      grandTotal = grandTotal + data[j].hourlySale[i]
    }
  }
  console.log(grandTotal)
  return <td className="m-2 w-8 border">{grandTotal}</td> 
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
              <th>Totals</th>
            </tr>
          </thead>
          <tbody className="border text-center">
                     
              {props.data.map((stand) => (
                <tr>
                  <td key={stand.id} className="m-2 w-8 border" type="text">
                    {stand.location}
                  </td>
                  {stand.hourlySale.map(sale => (<td className="m-2 w-8 border">{sale}</td>))}
                  <td key={stand.id} className="m-2 w-8 border">{totalSales(stand.hourlySale)}</td>
                </tr>
                ))}
          </tbody>

          <tr>
            <td className="font-bold" type="integer">Totals</td>
            {lastRow(props.data)}
          </tr>
        </table>
      </div>
    );
  }
}

// need to get location and hourly_sales data from a report
