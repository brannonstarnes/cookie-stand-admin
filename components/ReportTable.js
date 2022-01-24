import { useState } from "react";
import { hourly_sales, hours } from "../data";
import CreateForm from "./CreateForm";
import getTotal from "../data";
import stands from "../stands.json";

export default function ReportTable(props) {
  function totalSales(sales_report) {
    var total = sales_report.reduce(add, 0);
    function add(acc, a) {
      return acc + a;
    }
    return total;
  }

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
            <td className="font-bold text-center">{stands.stand.location}</td>
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
            <td className="m-2 w-8 border text-center font-bold" type="integer">
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
// need to get location and hourly_sales data from a report
