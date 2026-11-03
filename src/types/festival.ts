export type CultureRegion =
  | "East Asian"
  | "Celtic & Western"
  | "Latin American"
  | "Indian & South Asian"
  | "European & Mediterranean"
  | "Middle Eastern & Persian";

export type EffortLevel = "Easy & Cozy" | "Half-Day Fun" | "Weekend Project";

export interface IndianSubstitution {
  authenticItem: string;
  indianSubstitute: string;
  note: string;
}

export interface FeastRecipe {
  dishName: string;
  dishDescription: string;
  drinkName: string;
  drinkDescription: string;
  quickRecipeSteps: string[];
  vegetarianOption: string;
}

export interface CoupleRitual {
  title: string;
  estimatedDuration: string; // e.g. "45 mins"
  description: string;
  steps: string[];
  materialsNeeded: string[];
}

export interface AmbianceKit {
  musicTheme: string;
  suggestedPlaylist: string;
  spotifySearchQuery: string;
  lightingAndDecor: string;
  movieOrShowRecommendation: {
    title: string;
    year?: string;
    platformHint?: string;
    whyWatch: string;
  };
}

export interface IndianFeasibility {
  effortLevel: EffortLevel;
  estimatedBudgetInINR: string; // e.g. "₹500 - ₹900"
  prepTime: string; // e.g. "45 mins"
  quickCommerceItems: string[]; // for Blinkit / Zepto
  localMarketItems: string[]; // flower mandi, local pottery, etc.
  substitutions: IndianSubstitution[];
  proTip: string;
}

export interface Festival {
  id: string;
  name: string;
  alternateNames?: string[];
  culture: CultureRegion;
  originCountry: string;
  month: number; // 1 - 12
  monthName: string;
  approximateDate: string; // e.g. "October 31"
  date2026: string; // YYYY-MM-DD
  tagline: string;
  summary: string;
  culturalSignificance: string;
  coverImage: string;
  coupleRitual: CoupleRitual;
  feast: FeastRecipe;
  ambiance: AmbianceKit;
  indianFeasibility: IndianFeasibility;
}

export interface CoupleMemory {
  _id?: string;
  festivalId: string;
  festivalName: string;
  celebratedDate: string; // YYYY-MM-DD
  rating: number; // 1 to 5
  isAnnualTradition: boolean;
  partnerNotes: string;
  photoUrl?: string;
  dishCooked?: string;
  createdAt?: string;
}

export interface CouplePlanItem {
  _id?: string;
  festivalId: string;
  plannedDate?: string;
  notes?: string;
  isCompleted: boolean;
}
