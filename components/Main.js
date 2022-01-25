import ReportTable from "./ReportTable";
import CreateForm from "./CreateForm";
import { hourly_sales, hours } from "../data";
import { useState } from "react";

export default function Main() {
  const [allStandData, setAllStandData] = useState([]);

  function handleStandCreated(event) {
    event.preventDefault();
    const [location, minCustomers, maxCustomers, avgCookies] = event.target;

    let standDailyTotal = 0;
    const hourlySale = hours.map((hour) => {
      const randomCustomers =
        Math.floor(
          Math.random() * (maxCustomers.value - minCustomers.value + 1)
        ) + minCustomers.value;

      const cookiesSold = randomCustomers * avgCookies.value;
      standDailyTotal = standDailyTotal + cookiesSold;
      return cookiesSold;
    });

    const standData = {
      location: location.value,
      hourlySale: hourlySale,
      standDailyTotal: standDailyTotal,
    };
    setAllStandData([...allStandData, standData]);
  }

  return (
    <>
      <CreateForm
        hourly_sales={hourly_sales}
        handleStandCreated={handleStandCreated}
      />
      <ReportTable data={allStandData} />
    </>
  );
}
