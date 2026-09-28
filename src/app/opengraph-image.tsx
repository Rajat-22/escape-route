import { ImageResponse } from "next/og";

export const alt =
  "Escape-Route — Travel itinerary planner with an interactive route map";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Small helper so the inline styles below stay readable. */
const chip = (label: string, color: string) => (
  <div
    key={label}
    style={{
      display: "flex",
      fontSize: 22,
      color,
      border: `1px solid ${color}55`,
      backgroundColor: `${color}18`,
      padding: "9px 18px",
      borderRadius: 999,
    }}
  >
    {label}
  </div>
);

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#020617",
          // Indigo → sky → cyan, matching the app's brand gradient.
          backgroundImage:
            "radial-gradient(circle at 15% 12%, #6366f133 0%, transparent 45%), radial-gradient(circle at 88% 88%, #22d3ee26 0%, transparent 45%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #0ea5e9, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            🧭
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#e2e8f0", letterSpacing: -0.5 }}>
            Escape-Route
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            Travel Itinerary, Mapped Live.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#94a3b8",
              lineHeight: 1.4,
              maxWidth: 940,
            }}
          >
            Day-by-day trip planning with real road-following routes, insider tips
            and an interactive map — generated in seconds.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "nowrap" }}>
          {chip("AI Itinerary Generator", "#818cf8")}
          {chip("Trip Planner", "#38bdf8")}
          {chip("Interactive Route Map", "#67e8f9")}
          {chip("Road-Accurate Routing", "#4ade80")}
        </div>
      </div>
    ),
    size,
  );
}