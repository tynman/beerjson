import { TemperatureType, TimeType, GravityType, AcidityType } from "./measureable_units";

/// BoilStepType - a per step representation of a boil process, can be used to support preboil steps, non-boiling pasteurization steps, boiling, whirlpool steps, and chilling.
export interface BoilStepType {
    name: string,
    description?: string,
    start_temperature?: TemperatureType,
    end_temperature?: TemperatureType,
    ramp_time?: TimeType,
    step_time?: TimeType,
    start_gravity?: GravityType,
    end_gravity?: GravityType,
    start_ph?: AcidityType,
    end_ph?: AcidityType,
    /// Chilling type seperates batch chilling, ie immersion chillers, where the entire volume of wort is brought down in temperture as a whole, vs inline chilling where the wort is chilled while it is being drained, which can leave a significant amount of hop isomerization and hop oils isomerizing in the boil kettle.
    chilling_type: "batch" | "inline"
}