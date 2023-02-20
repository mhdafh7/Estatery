import { useContext } from "react";
import { useQuery } from "react-query";
import { getRentals } from "./api/rentalApi";
import Card from "./components/Card";
import SearchAndFilter from "./components/SearchAndFilter";
import { ParamContext } from "./Context/ParamContext";
import { Rent } from "./types/types";

function App() {
  const { state, setState, propertyType, setPropertyType } =
    useContext(ParamContext);
  const {
    isLoading,
    isError,
    error,
    data: rentals,
  } = useQuery(
    ["rentals", state, propertyType],
    () => getRentals(["rentals", state, propertyType], state, propertyType),
    {
      keepPreviousData: true,
    }
  );

  return (
    <main className="flex flex-col mx-24">
      {/* Search */}
      <SearchAndFilter />
      {/* Grid */}
      <section className="grid gap-4">
        {isLoading ? (
          <p>Loading....</p>
        ) : isError ? (
          <p>{(error as Error).message}</p>
        ) : (
          <div className="grid grid-cols-3 place-items-center w-full gap-5 mt-5 max-lg:grid-cols-2 max-lg:grid-rows-3 max-md:flex max-md:items-center max-md:justify-center max-md:flex-col ">
            {rentals.map((rental: Rent) => {
              return (
                <Card
                  key={rental.id}
                  streetAddress={rental.streetAddress}
                  cityName={rental.cityName}
                  state={rental.state}
                  zipcode={rental.zipcode}
                  price={rental.price}
                  bedroom={rental.bedroom}
                  bathroom={rental.bathroom}
                  image={rental.image}
                  availableDate={rental.availableDate}
                  propertyType={rental.propertyType}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
