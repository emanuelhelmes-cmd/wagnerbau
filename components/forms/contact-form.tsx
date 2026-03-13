"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Button, Input, Textarea, Label } from "@/components/ui";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { submitContactForm } from "@/lib/actions/contact";

/**
 * Contact form with client-side validation and server action submission
 * Stores messages in database via server action
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        setStatus("success");
        setServerMessage(result.message);
        reset();
      } else {
        setStatus("error");
        setServerMessage(result.message);
      }
    } catch {
      setStatus("error");
      setServerMessage("Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div className="rounded-xl border border-success/20 bg-success/5 p-8 text-center" role="status" aria-live="polite">
        <CheckCircle2 className="h-12 w-12 text-success mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Nachricht gesendet!</h3>
        <p className="text-muted mb-6">{serverMessage}</p>
        <Button
          variant="outline"
          onClick={() => {
            setStatus("idle");
            setServerMessage("");
          }}
        >
          Neue Nachricht senden
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot field — hidden from users, traps bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website" as keyof ContactFormData)}
        />
      </div>

      {/* Error Banner */}
      {status === "error" && (
        <div className="rounded-lg border border-error/20 bg-error/5 p-4 flex items-start gap-3" role="alert" aria-live="assertive">
          <AlertCircle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
          <p className="text-sm text-error">{serverMessage}</p>
        </div>
      )}

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-error">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Ihr vollständiger Name"
          error={errors.name?.message}
          {...register("name")}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">
          E-Mail <span className="text-error">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="ihre.email@beispiel.de"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+49 ..."
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Nachricht <span className="text-error">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Beschreiben Sie kurz Ihr Anliegen..."
          rows={5}
          error={errors.message?.message}
          {...register("message")}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full gap-2"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Nachricht senden
          </>
        )}
      </Button>

      <p className="text-xs text-muted text-center">
        Mit dem Absenden stimmen Sie unserer{" "}
        <a href="/datenschutz" className="text-accent hover:underline">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>
    </form>
  );
}
