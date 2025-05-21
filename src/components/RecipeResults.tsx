
import React, { useState } from 'react';
import RecipeCard, { Recipe } from './RecipeCard';
import { toast } from 'sonner';

interface RecipeResultsProps {
  ingredients: string[];
  onBack: () => void;
}

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Quick Veggie Stir Fry',
    description: 'A delicious and easy stir fry with your leftover vegetables and protein.',
    cookingTime: 20,
    servings: 2,
    ingredients: [
      'bell peppers',
      'onion',
      'garlic',
      'soy sauce',
      'rice',
      'olive oil',
      'ginger'
    ],
    instructions: [
      'Heat oil in a large pan or wok.',
      'Add diced onions and garlic, stir fry for 2 minutes.',
      'Add bell peppers and other vegetables, cook for 3-4 minutes.',
      'Add protein of choice and cook until done.',
      'Pour in soy sauce and other seasonings.',
      'Serve hot over rice.'
    ],
    isSaved: false
  },
  {
    id: '2',
    title: 'Simple Pasta Primavera',
    description: 'A light and fresh pasta dish that uses up your vegetable odds and ends.',
    cookingTime: 25,
    servings: 4,
    ingredients: [
      'pasta',
      'broccoli',
      'cherry tomatoes',
      'garlic',
      'parmesan cheese',
      'olive oil',
      'lemon juice'
    ],
    instructions: [
      'Boil pasta according to package directions.',
      'In a separate pan, sauté garlic in olive oil.',
      'Add vegetables and cook until tender but still crisp.',
      'Drain pasta and add to the vegetable pan.',
      'Add lemon juice and toss to combine.',
      'Top with grated parmesan before serving.'
    ],
    isSaved: false
  },
  {
    id: '3',
    title: 'Leftover Grain Bowl',
    description: 'A nutritious bowl combining your grains, proteins, and vegetables.',
    cookingTime: 15,
    servings: 1,
    ingredients: [
      'rice', 
      'quinoa', 
      'avocado',
      'eggs',
      'kale',
      'carrots',
      'tahini'
    ],
    instructions: [
      'Warm up leftover grains in a microwave or pan.',
      'Prepare a quick dressing with tahini, lemon juice, and salt.',
      'Arrange grains in a bowl and top with vegetables.',
      'Add protein of choice (eggs, tofu, chicken, etc).',
      'Drizzle with dressing and enjoy.'
    ],
    isSaved: false
  }
];

const RecipeResults: React.FC<RecipeResultsProps> = ({ ingredients, onBack }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(MOCK_RECIPES);

  const handleSaveRecipe = (id: string) => {
    setRecipes(currentRecipes => 
      currentRecipes.map(recipe => 
        recipe.id === id 
          ? { ...recipe, isSaved: !recipe.isSaved } 
          : recipe
      )
    );
    
    const recipe = recipes.find(r => r.id === id);
    if (recipe) {
      toast.success(
        recipe.isSaved 
          ? `Removed "${recipe.title}" from saved recipes` 
          : `Saved "${recipe.title}" to your collection`
      );
    }
  };

  const handleGenerateShoppingList = (id: string) => {
    const recipe = recipes.find(r => r.id === id);
    if (recipe) {
      toast.success(`Shopping list generated for "${recipe.title}"!`);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Your Recipe Ideas</h2>
          <p className="text-muted-foreground mt-1">
            Based on: {ingredients.join(', ')}
          </p>
        </div>
        <button 
          onClick={onBack}
          className="text-chef-green-600 font-medium hover:underline"
        >
          Change ingredients
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onSave={handleSaveRecipe}
            onGenerateShoppingList={handleGenerateShoppingList}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeResults;
