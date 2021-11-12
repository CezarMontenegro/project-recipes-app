const ingredientAPI = async (url, param) => {
  try {
    const ingredientes = await fetch(`${url}${param}`);
    const results = await ingredientes.json();
    return results;
  } catch (error) {
    global.alert(error);
  }
};

export const nameAPI = async (url, param) => {
  const name = await fetch(`${url}${param}`);
  const results = await name.json();
  return results;
};

export const firstLetterAPI = async (url, param) => {
  const firstLetter = await fetch(`${url}${param}`);
  const results = await firstLetter.json();
  return results;
};

export const categoriesData = async (url) => {
  const fetchCategories = await fetch(url);
  const results = await fetchCategories.json();
  return results;
};

export const filterCategory = async (url, param) => {
  const fetchFilterCategory = await fetch(`${url}${param}`);
  const results = await fetchFilterCategory.json();
  return results;
};

export const cardById = async (url, param) => {
  const fetchGetDrinkById = await fetch(`${url}${param}`);
  const results = await fetchGetDrinkById.json();
  return results;
};

export default ingredientAPI;
