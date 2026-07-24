import { supabase } from "../lib/supabase";
import type { VisitCardFormData, VisitorCard } from "../types/visitorCards";

interface VisitorCardDatabaseRow {
  id: string;
  name: string;
  role: string | null;
  handle: string | null;
  comment: string | null;
  variant: number;
  created_at: string;
}

function emptyToNull(value: string): string | null {
  const cleanedValue = value.trim();

  return cleanedValue.length > 0 ? cleanedValue : null;
}

export async function createVisitCard(
  form: VisitCardFormData,
): Promise<number> {
  // This decides which visual card design will be used.
  const variant = Math.floor(Math.random() * 6) + 1;

  const { error } = await supabase.from("visitor_cards").insert({
    name: form.name.trim(),
    role: emptyToNull(form.role),
    handle: emptyToNull(form.handle),
    comment: emptyToNull(form.comment),
    variant,
  });

  if (error) {
    throw new Error(error.message);
  }

  return variant;
}

export async function getApprovedVisitCards(): Promise<VisitorCard[]> {
  const { data, error } = await supabase
    .from("visitor_cards")
    .select("id, name, role, handle, comment, variant, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    console.error("Supabase insert error:", error);

    const details = [
      error.message,
      error.details,
      error.hint,
      error.code ? `Code: ${error.code}` : "",
    ]
      .filter(Boolean)
      .join(" — ");

    throw new Error(details);
  }

  const rows = (data ?? []) as VisitorCardDatabaseRow[];

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    role: row.role,
    handle: row.handle,
    comment: row.comment,
    variant: row.variant,
    createdAt: row.created_at,
  }));
}
