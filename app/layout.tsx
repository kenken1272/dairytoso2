"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <style>
          {`
            body {
              margin: 0;
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              color: #333;
            }
            header {
              background-color: #4CAF50;
              color: white;
              padding: 1rem;
              text-align: center;
            }
            footer {
              background-color: #222;
              color: white;
              padding: 1rem;
              text-align: center;
              position: fixed;
              bottom: 0;
              width: 100%;
            }
            main {
              padding: 2rem;
              min-height: calc(100vh - 8rem);
              box-sizing: border-box;
            }
          `}
        </style>
      </head>
      <body>
        <header>
          <h1>日記アプリ</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 日記アプリ</footer>
      </body>
    </html>
  );
}