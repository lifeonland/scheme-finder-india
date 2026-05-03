export interface LocalizedString {
  en: string;
  hi?: string;
  ta?: string;
  [key: string]: string | undefined;
}

export interface Scheme {
  id: string;
  name: LocalizedString;
  category: string;
  description: LocalizedString;
  benefit: LocalizedString;
  eligibility: string[];
  incomeLimit: number | null;
  minAge: number | null;
  maxAge: number | null;
  link: string;
}

export interface UserProfile {
  age: number;
  occupation: string;
  income: number;
}
