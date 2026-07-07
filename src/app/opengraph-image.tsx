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
          background: "#16202e",
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
          Non-Woven Fabric Manufacturer · India · Est. 1992
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
          <span style={{ color: "#c96a2e", marginLeft: 24 }}>MARKETING</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 900,
          }}
        >
          Thermal bond non-woven interlining & coated fabrics — 2 million
          metres a month, delivered on time across borders.
        </div>
      </div>
    ),
    { ...size }
  );
}
