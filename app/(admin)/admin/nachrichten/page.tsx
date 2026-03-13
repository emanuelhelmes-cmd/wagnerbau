import prisma from "@/lib/db";
import { formatDateTime } from "@/lib/utils";
import { MessageActions } from "./components/message-actions";
import { Card, CardContent, Badge } from "@/components/ui";
import { Mail, Phone } from "lucide-react";

/**
 * Admin Messages page
 * Lists all contact form submissions with read/archive actions
 */
export default async function NachrichtenPage() {
  const messages = await prisma.contactMessage.findMany({
    where: { isArchived: false },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Nachrichten</h1>
        <Badge variant="accent">{messages.length} Nachrichten</Badge>
      </div>

      {messages.length === 0 ? (
        <Card>
          <CardContent className="text-center py-16">
            <Mail className="h-12 w-12 text-muted-light mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Keine Nachrichten</h3>
            <p className="text-muted">
              Sobald jemand das Kontaktformular ausfüllt, erscheinen die Nachrichten hier.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card
              key={msg.id}
              className={`transition-colors ${!msg.isRead ? "border-l-2 border-l-accent bg-accent/[0.02]" : ""}`}
            >
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{msg.name}</h3>
                      {!msg.isRead && (
                        <Badge variant="accent" className="text-xs">Neu</Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted">
                      <a
                        href={`mailto:${msg.email}`}
                        className="flex items-center gap-1 hover:text-accent transition-colors"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        {msg.email}
                      </a>
                      {msg.phone && (
                        <a
                          href={`tel:${msg.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-1 hover:text-accent transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {msg.phone}
                        </a>
                      )}
                    </div>

                    <p className="text-muted leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </p>

                    <p className="text-xs text-muted-light mt-3">
                      {formatDateTime(msg.createdAt)}
                    </p>
                  </div>

                  {/* Actions */}
                  <MessageActions
                    id={msg.id}
                    isRead={msg.isRead}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
