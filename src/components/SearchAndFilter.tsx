import { useQuery, useMutation } from "react-query";
import { getRentals } from "../api/rentalApi";
import Dropdown from "./Dropdown";
import { Rent } from "../types/types";
import { useContext, useState } from "react";
import { ParamContext } from "../Context/ParamContext";

const SearchAndFilter = () => {
  const { state, setState, propertyType, setPropertyType, price, setPrice } =
    useContext(ParamContext);

  const {
    isSuccess,
    refetch,
    data: rentals,
  } = useQuery<Rent[], Error>(
    ["rentals", state, propertyType],
    () => getRentals(["rentals", state, propertyType], state, propertyType),
    {
      keepPreviousData: true,
      enabled: true,
    }
  );
  console.log(rentals);

  const STATE_LIST = [
    "MO",
    "MI",
    "WI",
    "OH",
    "CA",
    "GA",
    "IL",
    "DC",
    "TX",
    "AR",
    "PA",
    "FL",
    "VA",
    "MN",
    "NY",
    "AL",
    "CT",
    "OR",
    "AK",
    "AZ",
    "WA",
    "LA",
    "NV",
    "NC",
    "CO",
    "OK",
    "KY",
    "MA",
    "IA",
    "TN",
  ].sort();
  const PROPERTY_TYPE_LIST = [
    "Vacation Rentals",
    "Retail Spaces",
    "Mobile Homes",
    "Storage Spaces",
    "Apartments Office Spaces",
    "Multi-family homes",
    "Townhouses/Condos",
    "Single-family homes",
    "Industrial Spaces",
  ];
  const PRICE_LIST = ["under $1000", "$1000-$3000", "$3000-$7000", "$7000+"];

  return (
    <section className="mt-8 flex flex-col gap-8 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">Search properties to rent</h3>
        <input
          type={"search"}
          placeholder="Search with search bar"
          className=" rounded-md text-violet-800 border-gray-200 border-solid border-2 px-2 py-1 text-sm placeholder:font-bold"
        />
      </div>
      <div className="bg-white py-4 px-3">
        <ul className="flex items-center justify-between">
          <li className="px-4 flex flex-col gap-2">
            <p className="text-gray-500 text-xs font-semibold">State</p>
            <h5 className="font-bold">
              {isSuccess && (
                <Dropdown
                  list={STATE_LIST}
                  default={"Select state"}
                  setParam={setState}
                />
              )}
            </h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200 flex flex-col gap-2">
            <p className="text-gray-500 text-xs font-semibold">When</p>
            <h5 className="font-bold">select</h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200 flex flex-col gap-2">
            <p className="text-gray-500 text-xs font-semibold">Price</p>
            <h5 className="font-bold">
              {isSuccess && (
                <Dropdown
                  list={PRICE_LIST}
                  default={"Select range"}
                  setParam={setPrice}
                />
              )}
            </h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200 flex flex-col gap-2">
            <p className="text-gray-500 text-xs font-semibold">Property Type</p>
            <h5 className="font-bold">
              {isSuccess && (
                <Dropdown
                  list={PROPERTY_TYPE_LIST}
                  default={"Select type"}
                  setParam={setPropertyType}
                />
              )}
            </h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200 flex flex-col gap-2">
            <button
              onClick={() => {
                refetch;
              }}
              className="font-semibold rounded-md px-4 py-2 bg-violet-500 text-white"
            >
              search
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default SearchAndFilter;
