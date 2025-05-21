
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Clock, ShoppingBag, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  isSaved?: boolean;
}

interface RecipeCardProps {
  recipe: Recipe;
  onSave: (id: string) => void;
  onGenerateShoppingList: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSave, onGenerateShoppingList }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg recipe-card-shadow">
      <div className="bg-muted h-40">
        <img 
          src="/placeholder.svg" 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookingTime} mins</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <h4 className="font-medium mb-2">Ingredients</h4>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {recipe.ingredients.slice(0, 5).map((ingredient, i) => (
            <Badge key={i} variant="outline" className="bg-muted">
              {ingredient}
            </Badge>
          ))}
          {recipe.ingredients.length > 5 && (
            <Badge variant="outline" className="bg-muted">
              +{recipe.ingredients.length - 5} more
            </Badge>
          )}
        </div>
        
        <h4 className="font-medium mb-2">Instructions</h4>
        <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
          {recipe.instructions.slice(0, 3).map((instruction, i) => (
            <li key={i}>{instruction}</li>
          ))}
          {recipe.instructions.length > 3 && (
            <li className="text-sm font-medium text-chef-green-600">
              + {recipe.instructions.length - 3} more steps
            </li>
          )}
        </ol>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onSave(recipe.id)}
          className={cn(
            recipe.isSaved && "text-chef-orange-500 border-chef-orange-200 bg-chef-orange-50"
          )}
        >
          <Bookmark className={cn(
            "h-4 w-4 mr-1", 
            recipe.isSaved ? "fill-chef-orange-500" : ""
          )} />
          {recipe.isSaved ? "Saved" : "Save"}
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => onGenerateShoppingList(recipe.id)}
        >
          <ShoppingBag className="h-4 w-4 mr-1" />
          Shopping List
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
