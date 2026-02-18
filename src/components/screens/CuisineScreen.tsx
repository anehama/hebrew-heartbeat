import React from "react";
import { CUISINES } from "@/data/restaurants";
import ProgressDots from "@/components/ProgressDots";

interface CuisineScreenProps {
  onSelect: (cuisineId: string) => void;
  onBack: () => void;
}

const CuisineScreen: React.FC<CuisineScreenProps> = ({ onSelect, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 animate-fade-up">
      <button
        onClick={onBack}
        className="self-start text-muted-foreground text-sm mb-2 flex items-center gap-1 hover:text-foreground transition-colors"
      >
        חזרה →
      </button>

      <ProgressDots current={2} total={5} />

      <div className="text-center mb-8">
        <h2 className="font-display text-2xl text-foreground mb-2">
          מה בא לך לאכול?
        </h2>
        <p className="text-muted-foreground text-sm">
          בחרי סגנון מטבח
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CUISINES.map((cuisine) => (
          <button
            key={cuisine.id}
            onClick={() => onSelect(cuisine.id)}
            className="bg-card border-2 border-border rounded-2xl p-5 shadow-card hover:shadow-hover hover:border-primary/50 hover:bg-secondary/30 transition-all duration-200 active:scale-95 text-center"
          >
            <div className="text-4xl mb-2">{cuisine.emoji}</div>
            <h3 className="font-semibold text-foreground text-sm leading-tight">
              {cuisine.name}
            </h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CuisineScreen;
