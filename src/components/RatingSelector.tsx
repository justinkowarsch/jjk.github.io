import { useRating } from "./RatingContext";

export default function RatingSelector() {
  const { rating, setRating } = useRating();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <strong>Language Setting:</strong>{" "}
      <label>
        <input
          type="radio"
          checked={rating === "explicit"}
          onChange={() => setRating("explicit")}
        />
        Explicit
      </label>{" "}
      <label>
        <input
          type="radio"
          checked={rating === "pg"}
          onChange={() => setRating("pg")}
        />
        PG
      </label>
    </div>
  );
}
