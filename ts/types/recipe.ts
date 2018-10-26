import { DateType, VolumeType, PercentType, GravityType, ColorType, AcidityType } from "./measureable_units";
import { RecipeStyleType } from "./style";

/// RecipeType composes the information stored in a beerjson recipe
export interface RecipeType {
    name: string,
    type: 'extract' | 'partial mash' | 'all grain',
    author: string,
    coauthor?: string,
    created?: DateType,
    batch_size: VolumeType,
    efficiency?: {
        conversion: PercentType,
        lauter: PercentType,
        mash: PercentType,
        brewhouse: PercentType,
    }
    style?: RecipeStyleType,
    ingredients: {
        /// fermentable_additions collects all the fermentable ingredients for use in a recipe
        fermentable_additions: Array<FermentableAdditionType>,
        /// hop_additions collects all the hops for use in a recipe
        hop_additions?: Array<HopAdditionType>,
        /// miscellaneous_additions collects all the miscellaneous items for use in a recipe
        miscellaneous_additions?: Array<MiscellaneousAdditionType>,
        /// culture_additions collects all the culture items for use in a recipe
        /// water_additions collects all the water items for use in a recipe
    },
    mash?: MashProcedureType,
    notes?: string,
    original_gravity?: GravityType,
    final_gravity?: GravityType,
    alcohol_by_volume?: PercentType,
    ibu_estimate?: IBUEstimateType,
    color_estimate?: ColorType,
    beer_pH?: AcidityType,
    carbonation?: number,
    fermentation?: FermentationProcedureType,
    packaging?: PackagingProcedureType,
    boil?: BoilProcedureType,
    taste?: {
        notes: string,
        rating: number,
    },
    calories_per_pint?: number
}