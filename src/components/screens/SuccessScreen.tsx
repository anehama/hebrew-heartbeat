import React, { useEffect, useState } from "react";

interface SuccessScreenProps {
  restaurantName: string;
}

const CONFETTI_COLORS = ["#e8a4b8", "#d4a476", "#c4667a", "#f0c8a0", "#9b6b8a"];

interface ConfettiPiece {
  id: number;
  left: number;
  color: string;
  delay: number;
  size: number;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ restaurantName }) => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const pieces: ConfettiPiece[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      delay: Math.random() * 2,
      size: 6 + Math.random() * 8,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center px-6 py-8 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 animate-confetti pointer-events-none"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div
            style={{
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        </div>
      ))}

      <div className="text-center animate-fade-up">
        <div className="text-7xl mb-6 animate-float">🥂</div>

        <h1 className="font-display text-3xl text-foreground mb-3">
          נשלח בהצלחה! ✅
        </h1>

        <div className="bg-card border border-border rounded-2xl px-6 py-5 mb-6 shadow-card">
          <p className="text-foreground text-base mb-2">
            <span className="font-semibold text-primary">{restaurantName}</span> – הבחירה שלך!
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            אסף קיבל את המייל וכבר סוגר הזמנה 😉
          </p>
        </div>

        <div className="bg-secondary rounded-2xl px-5 py-4 mb-6">
          <p className="text-secondary-foreground text-sm italic">
            "בינה מלאכותית אישרה: הבחירה שלך מושלמת ב-100%" 🤖✨
          </p>
        </div>

        <p className="text-muted-foreground text-sm">
          עכשיו פשוט תהני! 🌹
        </p>
      </div>
    </div>
  );
};

export default SuccessScreen;
