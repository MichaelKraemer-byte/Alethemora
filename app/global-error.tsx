"use client";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="de">
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "1.5rem",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "1.5rem", margin: 0 }}>Etwas ist schiefgelaufen</h2>
          <p style={{ margin: 0, color: "#57534e", maxWidth: "28rem" }}>
            Die Anwendung konnte nicht geladen werden.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              border: "1px solid #d6d3d1",
              borderRadius: "9999px",
              background: "#fff",
              padding: "0.5rem 1.25rem",
              cursor: "pointer"
            }}
          >
            Erneut laden
          </button>
        </div>
      </body>
    </html>
  );
}
