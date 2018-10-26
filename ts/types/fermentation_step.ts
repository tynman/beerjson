import { AcidityType, GravityType, TimeType, TemperatureType } from "./measureable_units";

/// FermentationStepType - a per step representation of a fermentation action. Free rise is used to indicate a fermentation step where the exothermic fermentation is allowed to raise the temp without restriction.
export interface FermentationStepType {
    name: string,
    description?: string,
    start_temperature?: TemperatureType,
    end_temperature?: TemperatureType,
    step_time?: TimeType,
    free_rise?: boolean,
    start_gravity?: GravityType,
    end_gravity?: GravityType,
    start_ph?: AcidityType,
    end_ph?: AcidityType,
    vessel?: string,
}