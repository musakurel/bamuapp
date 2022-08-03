import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import {
  getPoints,
  getPointsByCity,
  getActiveCities
} from "~/models/point.server";
import cities from "~/cities.json";
import { useState } from "react";
export const loader = async () => {
  const points = await getPoints();
 const activeCitiesArray = await getActiveCities();
  return json({ points, activeCitiesArray });
};


export default function SatisNoktalari() {
  const { points, activeCitiesArray } = useLoaderData();
 const uniqueArray = a => [...new Set(a.map(o => JSON.stringify(o)))].map(s => JSON.parse(s))

  const activeCities= uniqueArray(activeCitiesArray);
  const [city, setCity] = useState(activeCities[0].city);
  const handleSelect = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="mx-auto flex max-w-sm items-center p-6">
        <h1 className="text-4xl font-medium text-black ">Satış Noktaları</h1>
      </div>

      <div className="mx-auto max-w-2xl items-center p-6">
      <p className="mb-10" >
        Bamu İsot Kreması satış noktalarımıza aşağıdan ulaşabilirsiniz.
      </p>
        <label
          htmlFor="countries"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Şehir seçiniz
        </label>
        <select
          id="city"
          name="city"
          value={city}
          className="mb-5 block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          onChange={handleSelect}
        >
          {activeCities?.map((cit) => {
            return (
              <option key={cit?.city} value={cit?.city}>
                {cit.city}{" "}
              </option>
            );
          })}
        </select>
        <div className="grid grid-cols-2 gap-4">
        
          {points
            ?.filter((point) => point?.city === city)
            .map((point) => {
              return (
                <a
                  href="#"
                  className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {point?.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {point?.adress}
                  </p>
                  <p className="font-bold text-gray-700 dark:text-gray-400">
                    {point?.city}
                  </p>
                  <p className="text-black-100 font-mono dark:text-gray-400">
                    📞 {point?.tel}
                  </p>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}
