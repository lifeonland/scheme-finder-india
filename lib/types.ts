export interface Scheme {
  id: string;
  name: string;
  category: string;
  description: string;
  benefit: string;
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
