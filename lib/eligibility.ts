import { Scheme, UserProfile } from "./types";

export function filterSchemes(schemes: Scheme[], profile: UserProfile): Scheme[] {
  return schemes.filter((scheme) => {
    // 1. Occupation Match
    const occupationMatch =
      scheme.eligibility.includes("all") ||
      scheme.eligibility.includes(profile.occupation.toLowerCase());

    if (!occupationMatch) return false;

    // 2. Income Match
    if (scheme.incomeLimit !== null && profile.income > scheme.incomeLimit) {
      return false;
    }

    // 3. Age Match
    if (scheme.minAge !== null && profile.age < scheme.minAge) {
      return false;
    }
    if (scheme.maxAge !== null && profile.age > scheme.maxAge) {
      return false;
    }

    return true;
  });
}
