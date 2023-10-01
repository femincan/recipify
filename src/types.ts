export type Meal = {
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
};

export type MealData = {
  meals: Meal[] | null;
};
