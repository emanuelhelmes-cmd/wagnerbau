import { redirect } from "next/navigation";
import { getSession } from "@/lib/actions/auth";
import { AdminSidebar } from "./components/admin-sidebar";

/**
 * Admin layout - wraps all protected admin pages
 * Checks authentication and provides sidebar navigation
 */
export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar email={session.email} />
      <main className="flex-1 overflow-auto">
        <div className="p-6 md:p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
