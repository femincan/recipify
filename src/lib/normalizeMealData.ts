import { MealApiData, MealData } from '@src/index.types';

const normalizeIngredients = (
  mealApiData: MealApiData,
): MealData['ingredients'] => {
  const ingredients: MealData['ingredients'] = [];

  for (let i = 1; i <= 20; i += 1) {
    type MealApiDataKey = keyof MealApiData;

    const ingredient = mealApiData[`strIngredient${i}` as MealApiDataKey];
    const measure = mealApiData[`strMeasure${i}` as MealApiDataKey];

    if (!ingredient || !measure) {
      break;
    }

    ingredients.push(`${measure.trim()} ${ingredient}`);
  }

  return ingredients;
};

export const normalizeMealData = (mealApiData: MealApiData): MealData => {
  const ingredients = normalizeIngredients(mealApiData);

  return {
    id: mealApiData.idMeal,
    name: mealApiData.strMeal,
    category: mealApiData.strCategory,
    area: mealApiData.strArea,
    instructions: mealApiData.strInstructions,
    thumb: mealApiData.strMealThumb,
    ingredients,
  };
};
