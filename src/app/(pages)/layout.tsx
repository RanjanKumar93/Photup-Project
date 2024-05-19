import "@/app/globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Nav />
      <main className="grid grid-cols-1">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
