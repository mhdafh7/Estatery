import { RectangleStackIcon, Square3Stack3DIcon } from '@heroicons/react/20/solid'

type Props = {
  streetAddress: string;
  cityName: string;
  state: string;
  zipcode: number;
  price: string;
  bedroom: number;
  bathroom: number;
  image: string;
};
const Card = ({
  streetAddress,
  cityName,
  state,
  zipcode,
  price,
  bedroom,
  bathroom,
  image,
}: Props) => {

  return (
    <article className="flex flex-col overflow-hidden bg-white rounded-md shadow-sm max-h-64">
      <img src={image} alt="image" className="max-h-28 object-cover" />
      <div className="flex flex-col gap-2 py-2 px-3">
        <p className="text-xs text-gray-600">
          <span className="text-violet-500 font-bold text-base">{`${price}`}</span>
          /month
        </p>
        <h3 className="font-bold">{cityName}</h3>
        <p className="text-gray-600 text-xs">{`${streetAddress}, ${state}`}</p>
        <hr />
        <div className="text-xxs flex gap-4 font-semibold">
          <span className="flex gap-1">
            <RectangleStackIcon className="text-violet-600 w-3 h-3"/>
            <p className="text-gray-500">{`${bedroom} Beds`}</p>
          </span>
          <span className="flex gap-1">
            <Square3Stack3DIcon className="text-violet-600 w-3 h-3"/>
            <p className="text-gray-500">{`${bathroom} Bathrooms`}</p>
          </span>
        </div>
      </div>
    </article>
  );
};
export default Card;
