export interface Recipe {
  id: number;
  typeFoodId: number;
  name: string;
  description: string;
  image: string;
  serves: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  ingredients: [{ name: string; quanlity: string; unit: string }];
  instructions: [
    {
      step: string;
      time: string;
    }
  ];
  nutrition: {
    calories: number;
    fat: string;
    saturated_fat: string;
    cholesterol: string;
    sodium: string;
    carbohydrates: string;
    fiber: string;
    sugar: string;
    protein: string;
  };
  calories: number;
  category: string;
  rating: number;
}
