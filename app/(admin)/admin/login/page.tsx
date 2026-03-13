"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Lock } from "lucide-react";
import { Button, Input, Label, Container } from "@/components/ui";
import { loginSchema, type LoginFormData } from "@/lib/validations";
import { login } from "@/lib/actions/auth";

/**
 * Admin Login page
 * Hidden route for admin panel access
 */
export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setLoading(true);
    setError("");
    try {
      const result = await login(data.email, data.password);
      if (result.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(result.message);
      }
    } catch {
      setError("Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Container size="narrow" className="max-w-md">
        <div className="rounded-xl border border-border bg-surface p-8 shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
              <Lock className="h-6 w-6 text-accent" />
            </div>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-sm text-muted mt-1">Wagner Bau & Immobilien</p>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg bg-error/10 border border-error/20 p-3 mb-6">
              <p className="text-sm text-error text-center">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@wagner-bau-immobilien.de"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                error={errors.password?.message}
                {...register("password")}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Anmelden...
                </>
              ) : (
                "Anmelden"
              )}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
