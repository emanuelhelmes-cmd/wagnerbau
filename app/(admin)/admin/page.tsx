import { MessageSquare, ImageIcon, MailOpen, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import prisma from "@/lib/db";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";

/**
 * Admin Dashboard page
 * Shows overview stats and recent messages
 */
export default async function AdminDashboardPage() {
  // Fetch stats
  const [totalMessages, unreadMessages, totalImages] = await Promise.all([
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.galleryImage.count(),
  ]);

  // Fetch recent messages
  const recentMessages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    {
      label: "Nachrichten gesamt",
      value: totalMessages,
      icon: MessageSquare,
      href: "/admin/nachrichten",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      label: "Ungelesen",
      value: unreadMessages,
      icon: MailOpen,
      href: "/admin/nachrichten",
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      label: "Galeriebilder",
      value: totalImages,
      icon: ImageIcon,
      href: "/admin/galerie",
      color: "text-info",
      bg: "bg-info/10",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="hover:border-accent/30 transition-colors">
              <CardContent className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Messages */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Letzte Nachrichten</h2>
          <Link
            href="/admin/nachrichten"
            className="text-sm text-accent hover:underline flex items-center gap-1"
          >
            Alle anzeigen
            <Eye className="h-4 w-4" />
          </Link>
        </div>

        {recentMessages.length === 0 ? (
          <Card>
            <CardContent className="text-center py-10">
              <MessageSquare className="h-10 w-10 text-muted-light mx-auto mb-3" />
              <p className="text-muted">Noch keine Nachrichten</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-2">
            {recentMessages.map((msg) => (
              <Card key={msg.id} className={`${!msg.isRead ? "border-l-2 border-l-accent" : ""}`}>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium truncate">{msg.name}</p>
                      {!msg.isRead && (
                        <span className="inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-muted truncate">{msg.message}</p>
                  </div>
                  <p className="text-xs text-muted-light flex-shrink-0">
                    {formatDateTime(msg.createdAt)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
