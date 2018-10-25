import { TemperatureRangeType, QualitativeRangeType, PercentRangeType, PercentType, VolumeType, MassType, UnitType } from "./measureable_units";
import { FermentableAdditionTimings } from "./fermentable";

/// The descriptive base type for both culture records, and recipe additions. Provides unique properties to identify individual records of a culture
export interface CultureBase {
    name: string,
    type: "ale"
        | "bacteria"
        | "brett"
        | "champagne"
        | "kveik"
        | "lacto"
        | "lager"
        | "malolactic"
        | "mixed-culture"
        | "other"
        | "pedio"
        | "spontaneous"
        | "wine",
    form: "liquid" | "dry" | "slant" | "culture" | "dregs",
    laboratory?: string,
    product_id?: string,
}

/// CultureInformation collects the attributes of a microbial culture to store as record information
export interface CultureInformation extends CultureBase {
    temperature_range: TemperatureRangeType,
    flocculation: QualitativeRangeType,
    attenuation: PercentRangeType,
    alcohol_tolerance: PercentType,
    notes: string,
    best_for: string,
    /// UNDONE: Integer
    max_reuse: number,
    inventory: {
        liquid: VolumeType,
        dry: MassType,
        slant: VolumeType,
        culture: VolumeType,
    }
}

/// CultureAdditionType collects the attributes of each culture ingredient for use in a recipe
export interface CultureAdditionType extends CultureBase {
    attenuation?: PercentType,
    /// UNDONE: Integer
    times_cultured?: number,
    /// The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.
    timing?: FermentableAdditionTimings,
    /// UNDONE: Integer
    cell_count_billions?: number,
    amount: VolumeType | MassType | UnitType,
}