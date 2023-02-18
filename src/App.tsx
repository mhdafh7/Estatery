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
  bedrooms: number;
  bathrooms: number;
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
          rentals.map(
            ({
              id,
              streetAddress,
              cityName,
              county,
              state,
              zipcode,
              price,
              bedrooms,
              bathrooms,
              image,
            }: Props) => {
              return (
                <Card
                  key={id}
                  streetAddress={streetAddress}
                  cityName={cityName}
                  county={county}
                  state={state}
                  zipcode={zipcode}
                  price={price}
                  bedrooms={bedrooms}
                  bathrooms={bathrooms}
                  image={image}
                />
              );
            }
          )
        )}
      </section>
    </main>
  );
}

export default App;
