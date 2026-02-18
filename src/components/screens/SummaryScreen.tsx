import React, { useState } from "react";
import { HOME_RESTAURANT, CUISINES } from "@/data/restaurants";
import { BookingState } from "@/types/booking";

interface SummaryScreenProps {
  state: BookingState;
  onSend: () => Promise<void>;
  onBack: () => void;
}

const SummaryScreen: React.FC<SummaryScreenProps> = ({ state, onSend, onBack }) => {
  const [sending, setSending] = useState(false);

  const restaurant =
    state.choiceType === "home"
      ? HOME_RESTAURANT
      : CUISINES.flatMap((c) => c.restaurants).find((r) => r.id === state.restaurantId);

  const cuisine =
    state.cuisineId ? CUISINES.find((c) => c.id === state.cuisineId) : null;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long" });
  };

  const handleSend = async () => {
    setSending(true);
    await onSend();
    setSending(false);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 animate-fade-up">
      <button
        onClick={onBack}
        className="self-start text-muted-foreground text-sm mb-4 flex items-center gap-1 hover:text-foreground transition-colors"
      >
        ← חזרה
      </button>

      <div className="text-center mb-6">
        <div className="text-3xl mb-2">📋</div>
        <h2 className="font-display text-2xl text-foreground mb-1">
          נראה מעולה!
        </h2>
        <p className="text-muted-foreground text-sm">בדקי את הפרטים ושלחי לאסף</p>
      </div>

      {/* Summary Card */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card mb-6">
        {restaurant && (
          <div className="relative h-40 overflow-hidden">
            <img
              src={restaurant.imageUrl}
              alt={restaurant.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-3 right-4">
              <h3 className="font-display text-xl text-white font-semibold">{restaurant.name}</h3>
              <p className="text-white/80 text-sm">📍 {restaurant.area}</p>
            </div>
          </div>
        )}

        <div className="p-5 space-y-3">
          {cuisine && (
            <div className="flex items-center gap-3 py-2 border-b border-border">
              <span className="text-muted-foreground text-sm w-20 flex-shrink-0">סגנון</span>
              <span className="text-foreground font-medium">
                {cuisine.emoji} {cuisine.name}
              </span>
            </div>
          )}

          {state.date && (
            <div className="flex items-center gap-3 py-2 border-b border-border">
              <span className="text-muted-foreground text-sm w-20 flex-shrink-0">תאריך</span>
              <span className="text-foreground font-medium">
                📅 {formatDate(state.date)}
              </span>
            </div>
          )}

          {state.time && (
            <div className="flex items-center gap-3 py-2 border-b border-border">
              <span className="text-muted-foreground text-sm w-20 flex-shrink-0">שעה</span>
              <span className="text-foreground font-medium">🕐 {state.time}</span>
            </div>
          )}

          {state.note && (
            <div className="flex items-start gap-3 py-2">
              <span className="text-muted-foreground text-sm w-20 flex-shrink-0">הערה</span>
              <span className="text-foreground font-medium">💬 {state.note}</span>
            </div>
          )}
        </div>
      </div>

      {restaurant && (
        <a
          href={restaurant.infoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-primary text-sm underline mb-6 block"
        >
          מידע על {restaurant.name} ↗
        </a>
      )}

      <button
        onClick={handleSend}
        disabled={sending}
        className="w-full py-4 px-8 rounded-2xl text-primary-foreground font-semibold text-lg shadow-soft hover:shadow-hover active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-wait"
        style={{ background: "var(--gradient-button)" }}
      >
        {sending ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            שולח...
          </span>
        ) : (
          "שלחי לאסף! 🚀"
        )}
      </button>

      <p className="text-muted-foreground text-xs text-center mt-3">
        אסף יקבל מייל ויסגור את ההזמנה 😊
      </p>
    </div>
  );
};

export default SummaryScreen;
