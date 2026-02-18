import React from "react";
import { HOME_RESTAURANT } from "@/data/restaurants";
import ProgressDots from "@/components/ProgressDots";

interface ChoiceScreenProps {
  onSelect: (choice: "home" | "other") => void;
  onBack: () => void;
}

const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ onSelect, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 animate-fade-up">
      <button
        onClick={onBack}
        className="self-start text-muted-foreground text-sm mb-2 flex items-center gap-1 hover:text-foreground transition-colors"
      >
        → חזרה
      </button>

      <ProgressDots current={1} total={5} />

      <div className="text-center mb-8">
        <h2 className="font-display text-2xl text-foreground mb-2">
          איפה נחגוג?
        </h2>
        <p className="text-muted-foreground text-sm">
          את בוחרת – אסף סוגר 😊
        </p>
      </div>

      {/* Home Restaurant Option */}
      <button
        onClick={() => onSelect("home")}
        className="w-full bg-card border-2 border-primary/30 rounded-2xl overflow-hidden mb-4 shadow-card hover:shadow-hover hover:border-primary transition-all duration-200 active:scale-95 text-right"
      >
        <div className="relative h-40 overflow-hidden">
          <img
            src={HOME_RESTAURANT.imageUrl}
            alt={HOME_RESTAURANT.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-3 right-4">
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              מסעדת הבית ❤️
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display text-xl font-semibold text-foreground mb-1">
            {HOME_RESTAURANT.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-2">📍 {HOME_RESTAURANT.area}</p>
          <div className="flex gap-2 flex-wrap">
            {HOME_RESTAURANT.labels.map((label) => (
              <span key={label} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                {label}
              </span>
            ))}
          </div>
        </div>
      </button>

      {/* Other Restaurant Option */}
      <button
        onClick={() => onSelect("other")}
        className="w-full bg-card border-2 border-dashed border-border rounded-2xl p-6 shadow-card hover:shadow-hover hover:border-primary/50 transition-all duration-200 active:scale-95 text-center"
      >
        <div className="text-3xl mb-2">🗺️</div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
          בואי נגלה משהו חדש
        </h3>
        <p className="text-muted-foreground text-sm">
          בחרי סגנון מטבח ומסעדה לטעמך
        </p>
      </button>
    </div>
  );
};

export default ChoiceScreen;
