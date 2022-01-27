// import ReportTable from "./ReportTable";
// import CreateForm from "./CreateForm";
// import { hourly_sales, hours } from "../data";
// import { useState } from "react";
// import Footer from "./Footer";

// export default function Main() {
//   const [allStandData, setAllStandData] = useState([]);

//   function handleStandCreated(event) {
//     event.preventDefault();
//     const [location, minCustomers, maxCustomers, avgCookies] = event.target;

//     let standDailyTotal = 0;
//     const hourlySale = hours.map((sale) => {
//       const cookiesSold = Math.floor((Math.random() * ((maxCustomers.value - minCustomers.value) + 1) + minCustomers.value) * avgCookies.value);
      
//       standDailyTotal = standDailyTotal + cookiesSold;
      
//       return cookiesSold
//     });

//     const standData = {
//       location: location.value,
//       hourlySale: hourlySale,
//       standDailyTotal: standDailyTotal,
//       id: allStandData.length
//     };
//     setAllStandData([...allStandData, standData]);
//   }

// const stands = allStandData ? allStandData.length : 0;

//   return (
//     <>
//       <CreateForm handleStandCreated={handleStandCreated}
//       />
//       <ReportTable data={allStandData} />
//       <Footer count={stands} />
//     </>
//   );
// }
