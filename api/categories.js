import { API_URL } from "./const";

export async function fetchAllCategories() {
  return await fetch(API_URL + "categories").then(
    async (res) => await res.json()
  );
}
export async function fetchSubCategoriesById(id) {
  return await fetch(`${API_URL}sub_categories?category_id=${id}`).then(
    async (res) => await res.json()
  );
}

export async function fetchCategoriesWithSubcategories() {
  var categoryWithSubCategories = [];
  const { categories } = await fetchAllCategories();
  for (var category of categories) {
    const subCategories = await fetchSubCategoriesById(category.id)
      .then((response) => {
        const { sub_categories } = response;
        return sub_categories;
      })
      .catch((err) => []);
    categoryWithSubCategories.push({
      ...category,
      sub_categories: subCategories,
    });
  }
  console.log(categoryWithSubCategories);
  return categoryWithSubCategories;
}
