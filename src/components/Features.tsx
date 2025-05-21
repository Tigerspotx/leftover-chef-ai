
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, ListChecks, Share2, Clock } from 'lucide-react';

const features = [
  {
    title: 'AI Recipe Generation',
    description: 'Enter ingredients you have, and our AI will create personalized recipe suggestions in seconds.',
    icon: Camera,
    color: 'bg-chef-green-50 text-chef-green-600'
  },
  {
    title: 'Shopping Lists',
    description: 'Generate smart shopping lists for any missing ingredients needed to complete recipes.',
    icon: ListChecks,
    color: 'bg-chef-orange-50 text-chef-orange-600'
  },
  {
    title: 'Save & Share',
    description: 'Save your favorite recipes and share them with friends and family with one click.',
    icon: Share2,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Expiry Tracking',
    description: 'Track expiration dates for ingredients and get reminders to use them before they expire.',
    icon: Clock,
    color: 'bg-purple-50 text-purple-600'
  }
];

const Features = () => {
  return (
    <section className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smarter Cooking, Less Waste</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Chef Mate AI helps you reduce food waste while creating delicious meals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, i) => (
          <Card key={i} className="border border-border/50">
            <CardHeader>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
