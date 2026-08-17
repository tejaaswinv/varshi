import "./globals.css";

export const metadata = {
  title: "VARSHI — Multilingual Intelligence for Global Adoption",
  description: "An investor-facing landing page for VARSHI, built around multilingual voice, reasoning, action and global product adoption.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
