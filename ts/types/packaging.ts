import { VolumeType } from "./measureable_units";
import { PackagingVesselType } from "./packaging_vessel";

/// PackagingProcedureType describes the procedure for packaging your beverage
export interface PackagingProcedureType {
    name: string,
    packaged_volume?: VolumeType,
    description?: string,
    notes?: string,
    packaging_vessels?: Array<PackagingVesselType>,
}