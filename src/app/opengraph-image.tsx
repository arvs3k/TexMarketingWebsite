import { ImageResponse } from "next/og";

export const alt =
  "Krisons Marketing — Thermal Bond Non-Woven & Coated Fabrics, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b111a",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.12) 2px, transparent 2px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 3,
            color: "#f7e8dd",
            textTransform: "uppercase",
          }}
        >
          Interlining & Non-Woven Manufacturer · India · Est. 1992
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 84,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          KRISONS
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          We make the fabric you never see.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 32,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Own plant in Erode · 2 million meters a month · Request samples
        </div>
      </div>
    ),
    { ...size }
  );
}
