
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChefHat } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-chef-green-500" />
          <span className="font-display text-xl font-bold">Chef Mate AI</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden md:flex">
            My Saved Recipes
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <ChefHat className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
