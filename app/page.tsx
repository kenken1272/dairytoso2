"use client";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h2>ようこそ、日記アプリへ！</h2>
      <p>毎日簡単に日記をつけましょう。</p>
      <a
        href="/diary"
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          marginTop: "1rem",
        }}
      >
        日記を書く
      </a>
    </div>
  );
}
