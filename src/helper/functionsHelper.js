const getIngredients = (array) => {
  const mapIngredients = array.map((item) => item.join('-'));
  return mapIngredients
    .filter((item) => item.includes('strIngredient') && item[item.length - 1] !== '-');
};

export const getQuantIngredients = (array) => {
  const mapQuant = array.map((item) => item.join('-'));
  return mapQuant
    .filter((item) => item.includes('strMeasure') && item[item.length - 1] !== '-');
};

export default getIngredients;
