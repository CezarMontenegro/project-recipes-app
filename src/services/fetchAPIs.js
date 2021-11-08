const ingredientAPI = async (param) => {
  const ingredientes = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${param}`);

  const results = await ingredientes.json();

  return results;
};

export const nameAPI = async (param) => {
  const name = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`);

  const results = await name.json();

  return results;
};

export const firstLetterAPI = async (param) => {
  const firstLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${param}`);

  const results = await firstLetter.json();

  return results;
};

export default ingredientAPI;
