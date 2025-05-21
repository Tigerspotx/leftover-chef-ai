
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import IngredientInput from '@/components/IngredientInput';
import RecipeResults from '@/components/RecipeResults';

const Index = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleGenerateRecipe = (ingredients: string[]) => {
    setIngredients(ingredients);
    setShowResults(true);
    // Scroll to results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {!showResults ? (
          <>
            <Hero />
            
            <section className="container py-12 md:py-16">
              <div className="max-w-3xl mx-auto">
                <IngredientInput onGenerateRecipe={handleGenerateRecipe} />
              </div>
            </section>
            
            <Features />
          </>
        ) : (
          <section className="container py-10">
            <RecipeResults ingredients={ingredients} onBack={handleBack} />
          </section>
        )}
      </main>
      
      <footer className="bg-muted mt-auto">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Chef Mate AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
