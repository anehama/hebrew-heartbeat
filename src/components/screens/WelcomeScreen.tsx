import React from "react";
import heroDinner from "@/assets/hero-dinner.jpg";

const AI_PHRASES = [
  "ניתחתי 4,712 מסעדות. רק הכי טובות ממתינות לך. 🤖✨",
  "האלגוריתם שלי אומר: את מגיעה לארוחה מושלמת. 💫",
  "מערכת בינה מלאכותית מתקדמת + טעם מעולה = ערב מושלם. 🍷",
];

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  const phrase = AI_PHRASES[Math.floor(Math.random() * AI_PHRASES.length)];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={heroDinner}
          alt="ארוחת ערב רומנטית"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
        <div className="absolute bottom-4 right-0 left-0 text-center">
          <span className="text-gold text-2xl animate-float inline-block">✦</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center animate-fade-up">
        <div className="mb-2">
          <span className="text-4xl">🎉</span>
        </div>

        <h1 className="font-display text-3xl text-foreground mb-2 leading-tight">
          מזל טוב נירית!
        </h1>

        <p className="font-display text-lg text-primary italic mb-6">
          על הקידום המיוחד ✨
        </p>

        <div className="bg-card border border-border rounded-2xl px-5 py-4 mb-8 shadow-card max-w-xs w-full">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {phrase}
          </p>
        </div>

        <p className="text-foreground text-base mb-8 leading-relaxed">
          אסף מזמין אותך לארוחת ערב חגיגית – ורק לך יש כח הבחירה! 🍽️
        </p>

        <button
          onClick={onNext}
          className="w-full max-w-xs py-4 px-8 rounded-2xl text-primary-foreground font-semibold text-lg shadow-soft transition-all duration-200 hover:shadow-hover active:scale-95"
          style={{ background: "var(--gradient-button)" }}
        >
          בואי נבחר מסעדה 🌹
        </button>

        <p className="text-muted-foreground text-xs mt-4">
          לוקח בערך 2 דקות • מובייל פריינדלי
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
