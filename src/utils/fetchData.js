import axios from "axios";

export const fetchData = async (prop) => {
  const [, url] = prop.queryKey;
  const res = await axios.get(url);
  return res.data;
};
