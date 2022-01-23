import { useState } from "react";
import { hours } from "../data";
import CreateForm from "./CreateForm";
hours;

export default function ReportTable(props) {
  

  return (
    <table className="bg-green-500">
      <thead className="border font-bold">
        <tr>
          <th>Location</th>
          {hours.map((time) => (
            <th>{time}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calexico</td>
          <td>3</td>
          <td>9</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>5</td>
          <td>4</td>
          <td>3</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>199</td>
        </tr>
      </tbody>

      <tr>
        <td>Totals</td>
        <td>4</td>
        <td>6</td>
      </tr>
    </table>
  );
}
// need to get location and hourly_sales data from a report
