import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export const fetchMealByName = async (name) => {
  const { data } = await api.get(`/search.php?s=${name}`);
  console.log(data.meals[0]);
  return data.meals[0];
};

export const fetchMealsByCategory = async (category) => {
  const { data } = await api.get(`/filter.php?c=${category}`);
  console.log(data.meals);
  return data.meals;
};

export const fetchMealsByArea = async (area) => {
  const { data } = await api.get(`/filter.php?a=${area}`);
  console.log(data.meals);
  return data.meals;
};

export const fetchMealsByMainIngredient = async (mainIngredient) => {
  const { data } = await api.get(`/filter.php?i=${mainIngredient}`);
  console.log(data.meals);
  return data.meals;
};

export const fetchMealDetailsById = async (id) => {
  const { data } = await api.get(`/lookup.php?i=${id}`);
  console.log(data.meals[0]);
  return data.meals[0];
};

export const fetchRandomMeal = async () => {
  const { data } = await api.get('/random.php');
  console.log(data.meals[0]);
  return data.meals[0];
};

export const fetchAllMealCategories = async () => {
  const { data } = await api.get('/categories.php');
  console.log(data.categories);
  return data.categories;
};
