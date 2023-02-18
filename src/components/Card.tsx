type Props = {
  streetAddress: string;
  cityName: string;
  county:string;
  state:string;
  zipcode: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
};
const Card = ({
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
  console.log(streetAddress);

  return (
    <article className="flex rounded-md">
      <img src={image} alt="image" />
      <div className="flex flex-col gap-5">
        <h3>{cityName}</h3>
        <p>{`${streetAddress},${county},${state}`}</p>
      </div>
    </article>
  );
};
export default Card;
