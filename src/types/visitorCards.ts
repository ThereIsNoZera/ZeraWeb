export interface VisitCardFormData {
  name: string;
  role: string;
  handle: string;
  comment: string;
}

export interface VisitorCard {
  id: string;
  name: string;
  role: string | null;
  handle: string | null;
  comment: string | null;
  variant: number;
  createdAt: string;
}
