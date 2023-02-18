import { useQuery } from "react-query";
import { getRentals } from "./api/rentalApi";
import Card from "./components/Card";
import SearchAndFilter from "./components/SearchAndFilter";

type Props = {
  id: string;
  streetAddress: string;
  cityName: string;
  county: string;
  state: string;
  zipcode: string;
  price: string;
  bedroom: number;
  bathroom: number;
  image: string;
};

function App() {
  const {
    isLoading,
    isError,
    error,
    data: rentals,
  } = useQuery(["rentals"], () => getRentals(), {
    keepPreviousData: true,
  });

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
          <div className="grid grid-cols-3 gap-5 mt-5">
            {rentals.map((rental: Props) => {
              return (
                <Card
                  key={rental.id}
                  streetAddress={rental.streetAddress}
                  cityName={rental.cityName}
                  county={rental.county}
                  state={rental.state}
                  zipcode={rental.zipcode}
                  price={rental.price}
                  bedroom={(rental.bedroom % 9)+1}
                  bathroom={(rental.bathroom % 9)+1}
                  image={rental.image}
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
