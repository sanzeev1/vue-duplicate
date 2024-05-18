import { API_URL } from "./const";

export async function fetchTabbedProducts(sub_category_id) {
  return await fetch(
    API_URL + "products/all/?sub_category_id=" + sub_category_id
  ).then(async (res) => await res.json());
}

export async function fetchProductById(id) {
  return await fetch(API_URL + "products/product/" + id)
    .then(async (res) => await res.json())
    .catch((err) => {
      return { product: { error: err } };
    });
}
