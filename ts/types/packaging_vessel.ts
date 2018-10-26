import { DateType, TemperatureType, TimeType, GravityType, AcidityType, VolumeType } from "./measureable_units";

/// PackagingVesselType - a per vessel representation of a packaging process
export interface PackagingVesselType {
    name: string,
    type?: "keg" | "bottle" | "cask" | "tank" | "firkin",
    description?: string,
    package_date?: DateType,
    start_temperature?: TemperatureType,
    end_temperature?: TemperatureType,
    step_time?: TimeType,
    start_gravity?: GravityType,
    end_gravity?: GravityType,
    start_ph?: AcidityType,
    end_ph?: AcidityType,
    carbonation?: number,
    vessel_volume?: VolumeType,
    vessel_quantity?: number
}