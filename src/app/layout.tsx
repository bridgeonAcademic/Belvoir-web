// app/layout.tsx
import "./globals.css"; // Import global CSS

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
