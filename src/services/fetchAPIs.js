const ingredientAPI = async (url, param) => {
  const ingredientes = await fetch(`${url}${param}`);
  const results = await ingredientes.json();
  return results;
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

export default ingredientAPI;
