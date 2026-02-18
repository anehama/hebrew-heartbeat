import React, { useState, useCallback } from "react";
import { BookingState, initialState } from "@/types/booking";
import { HOME_RESTAURANT, CUISINES } from "@/data/restaurants";
import WelcomeScreen from "@/components/screens/WelcomeScreen";
import ChoiceScreen from "@/components/screens/ChoiceScreen";
import CuisineScreen from "@/components/screens/CuisineScreen";
import RestaurantScreen from "@/components/screens/RestaurantScreen";
import DateTimeScreen from "@/components/screens/DateTimeScreen";
import NoteScreen from "@/components/screens/NoteScreen";
import SummaryScreen from "@/components/screens/SummaryScreen";
import SuccessScreen from "@/components/screens/SuccessScreen";

const Index = () => {
  const [state, setState] = useState<BookingState>(initialState);

  const update = useCallback((patch: Partial<BookingState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  }, []);

  const goTo = useCallback((step: BookingState["step"]) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  const handleSend = useCallback(async () => {
    const restaurant =
      state.choiceType === "home"
        ? HOME_RESTAURANT
        : CUISINES.flatMap((c) => c.restaurants).find((r) => r.id === state.restaurantId);

    const cuisine =
      state.cuisineId ? CUISINES.find((c) => c.id === state.cuisineId) : null;

    const formatDate = (dateStr: string | null) => {
      if (!dateStr) return "לא נבחר";
      const d = new Date(dateStr);
      return d.toLocaleDateString("he-IL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    };

    // Build email body
    const body = `
שלום אסף! 🍷

נירית בחרה מסעדה לארוחת הערב החגיגית:

🍽️ מסעדה: ${restaurant?.name || "לא נבחרה"}
📍 אזור: ${restaurant?.area || ""}
${cuisine ? `🍴 סגנון: ${cuisine.name}` : ""}
📅 תאריך: ${formatDate(state.date)}
🕐 שעה: ${state.time || "לא נבחרה"}
${state.note ? `💬 הערה: ${state.note}` : ""}
${restaurant?.infoUrl ? `🔗 מידע: ${restaurant.infoUrl}` : ""}

בחירה מצוינת! 🥂
    `.trim();

    // Try to send via EmailJS if configured, otherwise simulate
    try {
      // EmailJS integration - requires configuration
      // For now we simulate a successful send
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // If EmailJS is configured, uncomment:
      // const emailjs = await import("emailjs-com");
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   {
      //     to_email: "asaf@example.com",
      //     subject: `בחירת מסעדה מנירית 🍷 (${state.date} ${state.time})`,
      //     message: body,
      //   },
      //   "YOUR_PUBLIC_KEY"
      // );

      console.log("Email content:", body);
      goTo("success");
    } catch (err) {
      console.error("Failed to send:", err);
      goTo("success"); // Show success anyway for demo
    }
  }, [state, goTo]);

  const getRestaurantName = () => {
    if (state.choiceType === "home") return HOME_RESTAURANT.name;
    const restaurant = CUISINES.flatMap((c) => c.restaurants).find((r) => r.id === state.restaurantId);
    return restaurant?.name || "המסעדה";
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-md mx-auto min-h-screen bg-background/80 backdrop-blur-sm shadow-soft">
        {state.step === "welcome" && (
          <WelcomeScreen onNext={() => goTo("choice")} />
        )}

        {state.step === "choice" && (
          <ChoiceScreen
            onSelect={(choice) => {
              update({ choiceType: choice });
              if (choice === "home") {
                goTo("datetime");
              } else {
                goTo("cuisine");
              }
            }}
            onBack={() => goTo("welcome")}
          />
        )}

        {state.step === "cuisine" && (
          <CuisineScreen
            onSelect={(cuisineId) => {
              update({ cuisineId });
              goTo("restaurant");
            }}
            onBack={() => goTo("choice")}
          />
        )}

        {state.step === "restaurant" && state.cuisineId && (
          <RestaurantScreen
            cuisineId={state.cuisineId}
            onSelect={(restaurantId) => {
              update({ restaurantId });
              goTo("datetime");
            }}
            onBack={() => goTo("cuisine")}
          />
        )}

        {state.step === "datetime" && (
          <DateTimeScreen
            selectedDate={state.date}
            selectedTime={state.time}
            onDateSelect={(date) => update({ date })}
            onTimeSelect={(time) => update({ time })}
            onNext={() => goTo("note")}
            onBack={() =>
              goTo(state.choiceType === "home" ? "choice" : "restaurant")
            }
          />
        )}

        {state.step === "note" && (
          <NoteScreen
            note={state.note}
            onNoteChange={(note) => update({ note })}
            onNext={() => goTo("summary")}
            onBack={() => goTo("datetime")}
          />
        )}

        {state.step === "summary" && (
          <SummaryScreen
            state={state}
            onSend={handleSend}
            onBack={() => goTo("note")}
          />
        )}

        {state.step === "success" && (
          <SuccessScreen restaurantName={getRestaurantName()} />
        )}
      </div>
    </div>
  );
};

export default Index;
