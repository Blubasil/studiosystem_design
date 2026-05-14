import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"
import { translations } from "@/lib/i18n/translations"

const HERO = translations.en.hero

export const runtime = "nodejs"

export const alt = `${HERO.title1} ${HERO.title2} — ${HERO.badge}`

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

/** First file that exists wins: prefer real hero art, then optional og asset, then on-repo imagery. */
async function loadBackgroundDataUrl(): Promise<string | null> {
  const candidates: [string, string][] = [
    ["hero6.jpg", "image/jpeg"],
    ["og.jpg", "image/jpeg"],
    ["og.png", "image/png"],
    ["focus-pillar-agents.png", "image/png"],
  ]
  for (const [file, mime] of candidates) {
    try {
      const buf = await readFile(path.join(process.cwd(), "public", file))
      return `data:${mime};base64,${buf.toString("base64")}`
    } catch {
      /* try next */
    }
  }
  return null
}

export default async function Image() {
  const bg = await loadBackgroundDataUrl()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030303",
        }}
      >
        {bg ? (
          // eslint-disable-next-line @next/next/no-img-element -- required by @vercel/og / Satori
          <img
            alt=""
            src={bg}
            width={1200}
            height={630}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(1) brightness(0.88) contrast(1.12)",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#050505",
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.42) 40%, rgba(0,0,0,0.78) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 520px at 50% 10%, rgba(255,255,255,0.2), transparent 58%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 64px",
            maxWidth: 1080,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "rgba(255,255,255,0.06)",
              fontSize: 17,
              color: "rgba(255,255,255,0.78)",
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                backgroundColor: "#ffffff",
              }}
            />
            <span>{HERO.badge}</span>
          </div>

          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -2,
              lineHeight: 1.05,
              marginBottom: 8,
            }}
          >
            {HERO.title1}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "rgba(255,255,255,0.32)",
              letterSpacing: -2,
              lineHeight: 1.05,
              marginBottom: 22,
            }}
          >
            {HERO.title2}
          </div>

          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.48)",
              lineHeight: 1.45,
              maxWidth: 900,
              marginBottom: 32,
            }}
          >
            {HERO.description}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {[HERO.feature1, HERO.feature2, HERO.feature3].map((label) => (
              <div
                key={label}
                style={{
                  padding: "10px 18px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {label}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 16,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Padova, Italy
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
