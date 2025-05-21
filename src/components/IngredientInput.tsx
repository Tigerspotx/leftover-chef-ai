
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Plus, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';

interface IngredientInputProps {
  onGenerateRecipe: (ingredients: string[]) => void;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onGenerateRecipe }) => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addIngredient = () => {
    if (currentIngredient.trim() === '') return;
    
    // Check for duplicates
    if (ingredients.includes(currentIngredient.trim().toLowerCase())) {
      toast.error("This ingredient is already in your list");
      return;
    }
    
    setIngredients([...ingredients, currentIngredient.trim().toLowerCase()]);
    setCurrentIngredient('');
  };

  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const clearAll = () => {
    setIngredients([]);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };

  const handleGenerate = () => {
    if (ingredients.length < 2) {
      toast.error("Please add at least 2 ingredients");
      return;
    }
    
    setIsLoading(true);
    // In a real app, we'd call the AI here
    setTimeout(() => {
      onGenerateRecipe(ingredients);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl p-6 recipe-card-shadow">
      <h2 className="text-2xl font-bold mb-4">What's in your kitchen?</h2>
      <p className="text-muted-foreground mb-6">
        Enter the ingredients you have, and we'll generate delicious recipe ideas.
      </p>

      <div className="flex gap-2">
        <Input
          placeholder="Add an ingredient (e.g. chicken, rice, spinach)"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="flex-1"
        />
        <Button 
          onClick={addIngredient} 
          variant="outline" 
          size="icon"
          type="button"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {ingredients.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-6 mb-3">
            <h3 className="font-medium">Your ingredients ({ingredients.length})</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearAll} 
              className="h-8 text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="mr-1 h-3.5 w-3.5" />
              Clear all
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index} 
                className="ingredient-badge bg-chef-green-50 text-chef-green-700"
              >
                {ingredient}
                <button 
                  onClick={() => removeIngredient(index)}
                  className="ml-1 rounded-full hover:bg-chef-green-100 p-0.5"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <div className="flex justify-end">
            <Button 
              onClick={handleGenerate} 
              className="bg-chef-orange-500 hover:bg-chef-orange-600"
              disabled={ingredients.length < 2 || isLoading}
            >
              {isLoading ? "Generating..." : "Generate Recipe Ideas"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default IngredientInput;
