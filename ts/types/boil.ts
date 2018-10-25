import { VolumeType, TimeType } from "./measureable_units";
import { BoilStepType } from "./boil_step";

/// BoilProcedureType defines the procedure for performing a boil. A boil procedure with no steps is the same as a standard single step boil.
export interface BoilProcedureType {
    name?: string,
    description?: string,
    notes?: string,
    pre_boil_size: VolumeType,
    boil_time?: TimeType,
    boil_steps: Array<BoilStepType>
}