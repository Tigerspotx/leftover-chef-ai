
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const heroImages = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
];

const Hero = () => {
  return (
    <section className="container py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-[720px] leading-tight">
            Turn leftovers into{' '}
            <span className="bg-gradient-to-r from-chef-green-500 to-chef-orange-500 bg-clip-text text-transparent">
              delicious meals
            </span>
            <br /> – smarter, faster.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
            Reduce food waste by creating amazing recipes with ingredients you already have in your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="bg-chef-green-500 hover:bg-chef-green-600" size="lg">
              Get Started
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              How It Works
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative grid grid-cols-2 gap-4">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className={cn(
                  "overflow-hidden rounded-xl recipe-card-shadow animate-float",
                  index === 2 ? "col-span-2" : ""
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={img}
                  alt="Food"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
