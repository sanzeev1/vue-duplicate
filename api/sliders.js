import { API_URL } from "./const";

export async function fetchSliders() {
  return await fetch(API_URL + "slider/sliders").then(
    async (res) => await res.json()
  );
}
