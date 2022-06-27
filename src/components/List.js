import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";

export default function List() {
  // const [bill, setBill] = useState({
  //   type: "1",
  //   observation: "Probando",
  //   value: "3377",
  // });
  const [bills, setBills] = useState([]);
  useEffect(() => {
    const axios = require("axios");
    async function getBills() {
      try {
        const response = await axios.get(
          "https://prismatest.prismadigdev.repl.co/users/cramirez/bills"
        );
        setBills(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    getBills();
  }, []);
  // useEffect(() => {
  //   const axios = require("axios");
  //   async function createBill() {
  //     try {
  //       const response = await axios({
  //         method: "post",
  //         url: "https://PrismaTest.prismadigdev.repl.co/users/cramirez/bills",
  //         data: bill,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   createBill();
  // }, []);
  return (
    <>
      <Header />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Fecha
              </th>
              <th scope="col" className="px-6 py-3">
                Observation
              </th>
              <th scope="col" className="px-6 py-3">
                Tipo
              </th>
              <th scope="col" className="px-6 py-3">
                Valor
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr
                key={bill.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {bill.id}
                </th>
                <td className="px-6 py-4">{bill.date_bill.split("T")[0]}</td>
                <td className="px-6 py-4">{bill.observation}</td>
                <td className="px-6 py-4">{bill.type}</td>
                <td className="px-6 py-4">{bill.value}</td>
                <td className="px-6 py-4 text-right">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
