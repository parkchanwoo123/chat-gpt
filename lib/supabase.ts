import { env } from "./env";

const headers = {
  apikey: env.supabaseAnonKey,
  Authorization: `Bearer ${env.supabaseAnonKey}`,
  "Content-Type": "application/json"
};

export const supabase = {
  from(table: string) {
    return {
      async insert(payload: Record<string, unknown>) {
        const res = await fetch(`${env.supabaseUrl}/rest/v1/${table}`, {
          method: "POST",
          headers: { ...headers, Prefer: "return=representation" },
          body: JSON.stringify(payload)
        });
        return res.ok ? { error: null } : { error: new Error(await res.text()) };
      }
    };
  },
  auth: {
    async signInWithPassword({ email, password }: { email: string; password: string }) {
      const res = await fetch(`${env.supabaseUrl}/auth/v1/token?grant_type=password`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email, password })
      });
      return res.ok ? { error: null } : { error: new Error("login failed") };
    },
    async signUp({ email, password }: { email: string; password: string }) {
      await fetch(`${env.supabaseUrl}/auth/v1/signup`, { method: "POST", headers, body: JSON.stringify({ email, password }) });
    },
    async resetPasswordForEmail(email: string) {
      await fetch(`${env.supabaseUrl}/auth/v1/recover`, { method: "POST", headers, body: JSON.stringify({ email }) });
    }
  }
};
