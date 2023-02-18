import { BedIcon } from "./Svgs";

type Props = {
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
const Card = ({
  streetAddress,
  cityName,
  county,
  state,
  zipcode,
  price,
  bedroom,
  bathroom,
  image,
}: Props) => {
  console.log(streetAddress);

  return (
    <article className="flex flex-col overflow-hidden bg-white rounded-md">
      <img src={image} alt="image" />
      <div className="flex flex-col gap-2 py-2 px-3">
        <p className="text-xs text-gray-600">
          <span className="text-violet-700 font-bold text-base">{`$${price}`}</span>
          /month
        </p>
        <h3 className="font-bold">{cityName}</h3>
        <p className="text-gray-600 text-xs">{`${streetAddress}, ${state}`}</p>
        <hr />
        <div className="text-xxs flex gap-4 font-semibold">
          <span className="flex gap-1">
            <BedIcon />
            {`${bedroom} Beds`}
          </span>
          <span className="flex gap-1">
            <BedIcon />
            {`${bathroom} Bathrooms`}
          </span>
        </div>
      </div>
    </article>
  );
};
export default Card;
