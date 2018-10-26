import { TemperatureType, AcidityType } from "./measureable_units";
import { MashStepType } from "./mash_step";

/// MashProcedureType defines the procedure for performing unique mashing styles
export interface MashProcedureType {
    name: string,
    grain_temperature: TemperatureType,
    sparge_temperature?: TemperatureType,
    pH?: AcidityType,
    notes?: string,
    mash_steps: Array<MashStepType>
}