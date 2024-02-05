const endpoint =
  "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/products";

const getItems = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

const productsAPI = { getItems };
export default productsAPI;
