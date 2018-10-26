import { PercentType, VolumeType, MassType } from "./measureable_units";
import { AddToMash, AddToBoil, AddToFermentation } from "./fermentable";

/// HopVarietyBase provides unique properties to identify individual records of a hop variety
export interface HopVarietyBase {
    name: string,
    origin?: string,
    form?: "extract" 
        | "leaf" 
        | "leaf (wet)" 
        | "pellet" 
        | "powder" 
        | "plug",
    alpha_acid_units: number,
    beta_acid_units?: number,
}

/// VarietyInformation collects the attributes of a hop variety to store as record information
export interface VarietyInformation extends HopVarietyBase {
    type: "aroma"
        | "bittering"
        | "flavor"
        | "aroma/bittering"
        | "bittering/flavor"
        | "aroma/flavor"
        | "aroma/bittering/flavor",
    notes: string,
    percent_lost: PercentType,
    substitutes: string,
    /// oil_content collects all information of a hop variety pertaining to oil content, polyphenols, and thiols.
    oil_content: {
        total_oil_ml_per_100g: number,
        humulene: PercentType,
        'caryophyllene': PercentType,
        'cohumulone': PercentType,
        'myrcene': PercentType,
        'farnesene': PercentType,
        'geraniol': PercentType,
        'b-pinene': PercentType,
        'linalool': PercentType,
        'limonene': PercentType,
        'nerol': PercentType,
        'pinene': PercentType,
        'polyphenols': PercentType,
        'xanthohumol': PercentType,
    }
}

/// HopAdditionType collects the attributes of each hop ingredient for use in a recipe hop bil
export interface HopAdditionType extends HopVarietyBase {
    /// The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.
    timing?: AddToMash | AddToBoil | AddToFermentation,
    amount: VolumeType | MassType
}

export interface IBUEstimateType {
    method: IBUMethodType
}

export type IBUMethodType = "Rager" | "Tinseth" | "Garetz" | "Other";