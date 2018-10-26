import { VolumeType, TemperatureType, TimeType, SpecificVolumeType, AcidityType } from "./measureable_units";

/// MashStepType - a per step representation occurring within the mash
export interface MashStepType {
    name: string,
    type: "infusion"
        | "temperature"
        | "decoction"
        | "souring mash"
        | "souring wort"
        | "drain mash tun"
        | "sparge"
    amount?: VolumeType,
    step_temperature: TemperatureType,
    step_time: TimeType,
    ramp_time?: TimeType,
    end_temperature?: TemperatureType,
    description?: string,
    water_grain_ratio?: SpecificVolumeType,
    infuse_temperature?: TemperatureType,
    start_pH?: AcidityType,
    end_pH?: AcidityType,
}