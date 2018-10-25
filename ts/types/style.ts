import { GravityRangeType, BitternessRangeType, ColorRangeType, CarbonationRangeType, PercentRangeType } from "./measureable_units";

/// The descriptive base type for both style guideline records, and recipe style provisions. Provides unique properties to identify individual styles
export interface StyleBase {
    name: string,
    category: string,
    category_number: number,
    style_letter: string,
    style_guide: string,
    type: StyleCategories,
}

/// StyleType provide information for Style categorization
export interface StyleType extends StyleBase {
    original_gravity: GravityRangeType,
    final_gravity: GravityRangeType,
    international_bitterness_units: BitternessRangeType,
    color: ColorRangeType,
    carbonation: CarbonationRangeType,
    alcohol_by_volume: PercentRangeType,
    notes: string,
    aroma: string,
    appearance: string,
    flavor: string,
    mouthfeel: string,
    overall_impression: string,
    ingredients: string,
    examples: string,
}

/// RecipeStyleType defines style information stored in a recipe record
export interface RecipeStyleType extends StyleBase {}
export type StyleCategories = "beer" | "cider" | "kombucha" | "mead" | "other" | "soda" | "wine"