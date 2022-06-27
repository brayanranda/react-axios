import React, { useEffect, useState } from "react";
import Header from "./Layout/Header";

export default function Create() {
  const [bill, setBill] = useState({
    type: "1",
    observation: "Probando",
    value: "3377",
  });

  const handlerValue = (e) => {
    const value = e.target.value;
    setBill({
      ...bill,
      value,
    });
  };

  const handlerObservation = (e) => {
    const observation = e.target.observation;
    setBill({
      ...bill,
      observation,
    });
  };

  useEffect(() => {
    const axios = require("axios");
    async function createBill() {
      try {
        const response = await axios({
          method: "post",
          url: "https://PrismaTest.prismadigdev.repl.co/users/cramirez/bills",
          data: bill,
        });
      } catch (err) {
        console.log(err);
      }
    }
    createBill();
  }, []);

  return (
    <>
      <Header />
      <form>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Observation
          </label>
          <input
            value={bill.observation}
            onChange={handlerObservation}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Value
          </label>
          <input
            value={bill.value}
            onChange={handlerValue}
            type="text"
            id="value"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tipo
            </label>
            <input
              id="type"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Registrar
        </button>
      </form>
    </>
  );
}
