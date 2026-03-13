import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Marketing layout - wraps all public-facing pages with Header and Footer
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
