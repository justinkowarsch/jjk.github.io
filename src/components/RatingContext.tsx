import { createContext, ReactNode, useContext, useState } from "react";

type Rating = "explicit" | "pg";

const RatingContext = createContext<{
  rating: Rating;
  setRating: (rating: Rating) => void;
}>({
  rating: "explicit",
  setRating: () => {},
});

export function RatingProvider({ children }: { children: ReactNode }) {
  const [rating, setRating] = useState<Rating>("explicit");
  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
}

export function useRating() {
  return useContext(RatingContext);
}
