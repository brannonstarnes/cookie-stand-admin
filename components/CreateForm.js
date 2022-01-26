import { useState } from "react";
import { hours } from "../data";

// const stand = {
//   location: "",
//   minCustomers: "",
//   maxCustomers: "",
//   avgCookies: "",
// };

export default function CreateForm(props) {
  return (
    <form name="stand" onSubmit={props.handleStandCreated}>
      <div className=" h-36 w-2/3 bg-green-400 mx-auto mt-6 rounded">
        <h2 className="text-center pt-2 font-bold">Create Cookie Stand</h2>

        <label className="pl-4 pr-2 w-full text-xs md:text-base">
          Location
          <input name="location" type="text" className="w-5/6 m-2"></input>
        </label>

        <div className="flex flex-row  mx-3">
          <div className="w-1/4 bg-green-300 p-2 mr-1 flex items-center justify-center">
            <p className="relative text-center text-xs sm:text-xs md:text-sm">
              Minimum Customers per Hour
              <input
                name="minCustomers"
                type="integer"
                className="w-full "
              ></input>
            </p>
          </div>

          <div className="w-1/4 bg-green-300 p-2 ml-1 mr-1 flex items-center justify-center">
            <p className="relative text-center text-xs sm:text-xs md:text-sm">
              Maximum Customers per Hour
              <input
                name="maxCustomers"
                type="integer"
                className="w-full"
              ></input>
            </p>
          </div>

          <div className="w-1/4 bg-green-300 p-2 ml-1 mr-1 flex items-center justify-center">
            <p className="relative text-center text-xs sm:text-xs md:text-sm">
              Average Cookies per Sale
              <input
                name="avgCookies"
                type="integer"
                className="w-full"
              ></input>
            </p>
          </div>

          <div className="flex items-center justify-center w-40">
            <button className="bg-green-600 text-center w-full pr-6 h-14 text-xs md:text-base">
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
