import { VolumeType, MassType, UnitType } from "./measureable_units";
import { FermentableAdditionTimings } from "./fermentable";

/// MiscellaneousBase provides unique properties to identify individual records of ingredients
export interface MiscellaneousBase {
    name: string,
    type: "spice" | "fining" | "water agent" | "herb" | "flavor" | "wood" | "other"
}

/// MiscellaneousType collects the attributes of an ingredient to store as record information
export interface MiscellaneousType {
    use_for: string,
    notes: string,
    inventory: {
        amount: VolumeType | MassType | UnitType
    }
}

/// MiscellaneousAdditionType collects the attributes of each miscellaneous ingredient for use in a recipe
export interface MiscellaneousAdditionType {
    /// The timing object fully describes the timing of an addition with options for basis on time, gravity, or pH at any process step.
    timing?: FermentableAdditionTimings,
    amount: VolumeType | MassType | UnitType
}