import { 
    PercentType, 
    GravityType, 
    ColorType, 
    DiastaticPowerType, 
    VolumeType, 
    MassType, 
    TimeType, 
    AcidityType, 
    DensityType } from "./measureable_units";

/// Schema: http://json-schema.org/draft-04/schema
/// ID: http://json-schema.org/draft-04/schema
export interface FermentableBase {
    /// FermentableBase provides unique properties to identify individual records of fermentable ingredients
    name: string,
    type: FermentableBaseType,
    origin: string,
    supplier: string,
    grain_group: FermentableGrainGroup,
    yield: {
        fine_grind: PercentType,
        coarse_grind: PercentType,
        fine_coarse_difference: PercentType,
        potential: GravityType,
    },
    color: ColorType,
}

/// FermentableType collects the attributes of a fermentable ingredient to store as record information
export interface FermentableType extends FermentableBase {
    notes: string,
    moisture: PercentType,
    alpha_amylase: number,
    diastatic_power: DiastaticPowerType,
    protein: PercentType,
    soluble_nitrogen_ratio: number,
    max_in_batch: PercentType,
    recommend_mash: boolean,
    inventory: {amount: VolumeType | MassType},
}

/// FermentableAdditionType collects the attributes of each fermentable ingredient for use in a recipe fermentable bill
export interface FermentableAdditionType {
    /// The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.
    timing?: FermentableAdditionTimings,
    amount: VolumeType | MassType,
}

interface FermentableAdditionTimingBase {
    /// UNDONE: Integer
    step: number,
    time: TimeType,
    duration: TimeType,
}
export interface AddToMash extends FermentableAdditionTimingBase {}
export interface AddToBoil extends FermentableAdditionTimingBase {}
export interface AddToFermentation extends FermentableAdditionTimingBase {
    specific_gravity: DensityType,
    pH: AcidityType,
}
export interface AddToPackage extends FermentableAdditionTimingBase {
    specific_gravity: GravityType,
    pH: AcidityType,
}

export type FermentableAdditionTimings = AddToMash | AddToBoil | AddToFermentation | AddToPackage;



export type FermentableBaseType = "dry extract" | "extract" | "grain" | "sugar" | "fruit" | "juice" | "honey" | "other";
export type FermentableGrainGroup = "base" | "caramel" | "flaked" | "roasted" | "specialty" | "smoked" | "adjunct";