import React from "react";
import ProgressDots from "@/components/ProgressDots";

interface NoteScreenProps {
  note: string;
  onNoteChange: (note: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const NOTE_SUGGESTIONS = [
  "סוף סוף! 🎉",
  "וואו איזה מדהים אסף, אני כל כך הולכת לפנק אותו אחרי הארוחה! 😍",
  "תודה על ההפתעה ❤️",
  "כבר מתרגשת! ✨",
];

const NoteScreen: React.FC<NoteScreenProps> = ({ note, onNoteChange, onNext, onBack }) => {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 animate-fade-up">
      <button
        onClick={onBack}
        className="self-start text-muted-foreground text-sm mb-2 flex items-center gap-1 hover:text-foreground transition-colors"
      >
        → חזרה
      </button>

      <ProgressDots current={5} total={5} />

      <div className="text-center mb-6">
        <h2 className="font-display text-2xl text-foreground mb-2">
          משהו להוסיף? 😄
        </h2>
        <p className="text-muted-foreground text-sm">
          הערה קטנה לאסף (לא חובה)
        </p>
      </div>

      <div className="mb-4">
        <textarea
          value={note}
          onChange={(e) => onNoteChange(e.target.value)}
          placeholder="כתבי כאן... או בחרי רעיון למטה"
          className="w-full bg-card border-2 border-border rounded-2xl p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-primary transition-colors"
          rows={4}
          maxLength={200}
        />
        <p className="text-xs text-muted-foreground text-left mt-1">{note.length}/200</p>
      </div>

      {/* Quick suggestions */}
      <div className="flex flex-wrap gap-2 mb-8">
        {NOTE_SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onNoteChange(suggestion)}
            className="bg-secondary text-secondary-foreground text-sm px-3 py-2 rounded-xl border border-border hover:border-primary/40 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="w-full py-4 px-8 rounded-2xl text-primary-foreground font-semibold text-lg shadow-soft hover:shadow-hover active:scale-95 transition-all duration-200"
        style={{ background: "var(--gradient-button)" }}
      >
        לסיכום ←
      </button>
    </div>
  );
};

export default NoteScreen;
