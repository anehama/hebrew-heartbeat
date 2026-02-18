import React from "react";
import { getNextWeekDays, TIMES } from "@/data/restaurants";
import ProgressDots from "@/components/ProgressDots";

interface DateTimeScreenProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const DateTimeScreen: React.FC<DateTimeScreenProps> = ({
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
  onNext,
  onBack,
}) => {
  const days = getNextWeekDays();
  const canProceed = selectedDate && selectedTime;

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 animate-fade-up">
      <button
        onClick={onBack}
        className="self-start text-muted-foreground text-sm mb-2 flex items-center gap-1 hover:text-foreground transition-colors"
      >
        ← חזרה
      </button>

      <ProgressDots current={4} total={5} />

      <div className="text-center mb-6">
        <h2 className="font-display text-2xl text-foreground mb-2">
          מתי נפגשים?
        </h2>
        <p className="text-muted-foreground text-sm">
          בחרי יום ושעה
        </p>
      </div>

      {/* Days */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">📅 יום</h3>
        <div className="flex flex-col gap-2">
          {days.map((day) => (
            <button
              key={day.value}
              onClick={() => onDateSelect(day.value)}
              className={`w-full py-3 px-4 rounded-xl border-2 text-right font-medium transition-all duration-150 ${
                selectedDate === day.value
                  ? "border-primary bg-secondary text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>

      {/* Times */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-muted-foreground mb-3">🕐 שעה</h3>
        <div className="grid grid-cols-4 gap-2">
          {TIMES.map((time) => (
            <button
              key={time}
              onClick={() => onTimeSelect(time)}
              className={`py-3 rounded-xl border-2 text-center font-medium transition-all duration-150 ${
                selectedTime === time
                  ? "border-primary bg-secondary text-primary"
                  : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className={`w-full py-4 px-8 rounded-2xl text-primary-foreground font-semibold text-lg shadow-soft transition-all duration-200 ${
          canProceed
            ? "hover:shadow-hover active:scale-95 cursor-pointer"
            : "opacity-40 cursor-not-allowed"
        }`}
        style={{ background: canProceed ? "var(--gradient-button)" : "hsl(var(--muted))" }}
      >
        המשך →
      </button>
    </div>
  );
};

export default DateTimeScreen;
