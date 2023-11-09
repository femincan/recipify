type Nullable<T> = T | null;

export type MealApiData = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient1: Nullable<string>;
  strIngredient2: Nullable<string>;
  strIngredient3: Nullable<string>;
  strIngredient4: Nullable<string>;
  strIngredient5: Nullable<string>;
  strIngredient6: Nullable<string>;
  strIngredient7: Nullable<string>;
  strIngredient8: Nullable<string>;
  strIngredient9: Nullable<string>;
  strIngredient10: Nullable<string>;
  strIngredient11: Nullable<string>;
  strIngredient12: Nullable<string>;
  strIngredient13: Nullable<string>;
  strIngredient14: Nullable<string>;
  strIngredient15: Nullable<string>;
  strIngredient16: Nullable<string>;
  strIngredient17: Nullable<string>;
  strIngredient18: Nullable<string>;
  strIngredient19: Nullable<string>;
  strIngredient20: Nullable<string>;
  strMeasure1: Nullable<string>;
  strMeasure2: Nullable<string>;
  strMeasure3: Nullable<string>;
  strMeasure4: Nullable<string>;
  strMeasure5: Nullable<string>;
  strMeasure6: Nullable<string>;
  strMeasure7: Nullable<string>;
  strMeasure8: Nullable<string>;
  strMeasure9: Nullable<string>;
  strMeasure10: Nullable<string>;
  strMeasure11: Nullable<string>;
  strMeasure12: Nullable<string>;
  strMeasure13: Nullable<string>;
  strMeasure14: Nullable<string>;
  strMeasure15: Nullable<string>;
  strMeasure16: Nullable<string>;
  strMeasure17: Nullable<string>;
  strMeasure18: Nullable<string>;
  strMeasure19: Nullable<string>;
  strMeasure20: Nullable<string>;
};

export type MealApiResponse = {
  meals: MealApiData[] | null;
};

export type Ingredients = Record<string, string>[];

export type MealData = {
  id: string;
  name: string;
  category: string;
  area: string;
  instructions: string;
  thumb: string;
  ingredients: Ingredients;
};
