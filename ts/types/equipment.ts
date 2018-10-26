import { VolumeType, SpecificVolumeType, MassType, SpecificHeatType } from "./measureable_units";

/// The descriptive base type for brew day equipment. Provides unique properties to fully describe the recipe.
export interface EquipmentBase {
    name: string,
    type: string,
    form?: "HLT"
        | "Mash Tun"
        | "Lauter Tun"
        | "Brew Kettle"
        | "Fermenter"
        | "Aging Vessel"
        | "Packaging Vessel",
    maximum_volume: VolumeType,
}

/// EquipmentType provides necessary information for brewing equipment
export interface EquipmentType extends EquipmentBase {
    loss: VolumeType,
    grain_absorption_rate?: SpecificVolumeType,
    boil_rate_per_hour?: VolumeType,
    drain_rate_per_minute?: VolumeType,
    weight?: MassType,
    specific_heat?: SpecificHeatType,
    notes?: string
}