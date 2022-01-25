import { hours } from "../data";
import stands from "../stands.json";

export default function ReportTable(props) {
  function totalSales(sales_report) {
    var total = sales_report.reduce(add, 0);
    function add(acc, a) {
      return acc + a;
    }
    return total;
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
              {hours.map((time) => (
                <th className="w-12">{time}</th>
              ))}
              <th>Totals</th>
            </tr>
          </thead>
          <tbody className="border text-center">
            <tr>
              <td className="font-bold text-center">{props.data.location}</td>
              {stands.stand.hourly_sales.map((sale) => (
                <td className="m-2 w-8 border" type="integer">
                  {sale}
                </td>
              ))}
              <td>{totalSales(stands.stand.hourly_sales)}</td>
              {}
            </tr>
          </tbody>

          <tr>
            <td className="font-bold">Totals</td>
            {stands.stand.hourly_sales.map((sale) => (
              <td
                className="m-2 w-8 border text-center font-bold"
                type="integer"
              >
                {sale}
              </td>
            ))}
            <td className="font-bold text-center">
              {totalSales(stands.stand.hourly_sales)}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

// need to get location and hourly_sales data from a report
