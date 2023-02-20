import axios from "axios";

const rentalApi = axios.create({
  // baseURL: "https://63f0f2a75703e063fa4f7f58.mockapi.io/estatery/",
  baseURL: "https://my.api.mockaroo.com/renal.json",
});

// export const getRentals = async () => {
//   const res = await rentalApi.get('/rentals');
//   return res.data;
// };
export const getRentals = async (
  key: string[],
  state: string,
  propertyType: string
) => {
  const res = await rentalApi.get(
    `/rentals/`,
  );
  console.log(res);

  return res.data;
};
