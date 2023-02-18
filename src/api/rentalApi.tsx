import axios from "axios";

const rentalApi = axios.create({
  baseURL: "https://63f0f2a75703e063fa4f7f58.mockapi.io/estatery/"
});

export const getRentals = async () => {
  const res = await rentalApi.get('/rentals');
  return res.data;
};

