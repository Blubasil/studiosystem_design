import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Studio System - AI-Native Software Development"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "40px 80px",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#fafafa",
                letterSpacing: "-2px",
              }}
            >
              Studio
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#737373",
                letterSpacing: "-2px",
                marginLeft: "16px",
              }}
            >
              System
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "32px",
              color: "#a3a3a3",
              marginBottom: "48px",
              fontWeight: 400,
            }}
          >
            AI-Native Software Development
          </div>

          {/* Separator line */}
          <div
            style={{
              width: "120px",
              height: "2px",
              backgroundColor: "#404040",
              marginBottom: "48px",
            }}
          />

          {/* Location */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "20px",
              color: "#737373",
            }}
          >
            <span>📍</span>
            <span>Padova, Italy</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
