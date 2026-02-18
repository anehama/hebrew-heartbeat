import React from "react";
import { CUISINES } from "@/data/restaurants";
import ProgressDots from "@/components/ProgressDots";

interface RestaurantScreenProps {
  cuisineId: string;
  onSelect: (restaurantId: string) => void;
  onBack: () => void;
}

const RestaurantScreen: React.FC<RestaurantScreenProps> = ({ cuisineId, onSelect, onBack }) => {
  const cuisine = CUISINES.find((c) => c.id === cuisineId);
  if (!cuisine) return null;

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 animate-fade-up">
      <button
        onClick={onBack}
        className="self-start text-muted-foreground text-sm mb-2 flex items-center gap-1 hover:text-foreground transition-colors"
      >
        ← חזרה
      </button>

      <ProgressDots current={3} total={5} />

      <div className="text-center mb-6">
        <div className="text-3xl mb-1">{cuisine.emoji}</div>
        <h2 className="font-display text-2xl text-foreground mb-2">
          בחרי מסעדה
        </h2>
        <p className="text-muted-foreground text-sm">{cuisine.name}</p>
      </div>

      <div className="flex flex-col gap-4">
        {cuisine.restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => onSelect(restaurant.id)}
            className="w-full bg-card border-2 border-border rounded-2xl overflow-hidden shadow-card hover:shadow-hover hover:border-primary/40 transition-all duration-200 active:scale-95 text-right"
          >
            <div className="flex items-stretch">
              <div className="flex-1 p-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {restaurant.name}
                </h3>
                <p className="text-muted-foreground text-xs mb-2">📍 {restaurant.area}</p>
                <div className="flex gap-1 flex-wrap">
                  {restaurant.labels.map((label) => (
                    <span key={label} className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full">
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-24 flex-shrink-0">
                <img
                  src={restaurant.imageUrl}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop";
                  }}
                />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RestaurantScreen;
