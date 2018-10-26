import { FermentationStepType } from "./fermentation_step";

/// FermentationProcedureType defines the procedure for performing fermenting
export interface FermentationProcedureType {
    name: string,
    type?: string,
    description?: string,
    notes?: string,
    /// Min 1 item
    fermentation_steps: Array<FermentationStepType>,
}