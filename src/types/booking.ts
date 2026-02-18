export type Step =
  | "welcome"
  | "choice"
  | "cuisine"
  | "restaurant"
  | "datetime"
  | "note"
  | "summary"
  | "success";

export type ChoiceType = "home" | "other";

export interface BookingState {
  step: Step;
  choiceType: ChoiceType | null;
  cuisineId: string | null;
  restaurantId: string | null;
  date: string | null;
  time: string | null;
  note: string;
}

export const initialState: BookingState = {
  step: "welcome",
  choiceType: null,
  cuisineId: null,
  restaurantId: null,
  date: null,
  time: null,
  note: "",
};
