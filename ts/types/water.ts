import { ConcentrationType, VolumeType } from "./measureable_units";

/// WaterBase provides unique properties to identify individual records of regional brewing water
interface WaterBase {
    type: string,
    calcium: ConcentrationType,
    bicarbonate: ConcentrationType,
    sulfate: ConcentrationType,
    chloride: ConcentrationType,
    sodium: ConcentrationType,
    magnesium: ConcentrationType,
    carbonate?: ConcentrationType,
    potassium?: ConcentrationType,
    iron?: ConcentrationType,
    nitrate?: ConcentrationType,
    nitrite?: ConcentrationType,
    flouride?: ConcentrationType,
}
export type WaterContentTypes =  
    "calcium" 
    | "bicarbonate" 
    | "sulfate" 
    | "chloride" 
    | "sodium" 
    | "magnesium" 
    | "carbonate" 
    | "potassium" 
    | "iron" 
    | "nitrate" 
    | "nitrite" 
    | "flouride";

export interface WaterType extends WaterBase {
    pH: number,
    notes: string,
}

/// WaterAdditionType collects the attributes of each water addition for use in a recipe
export interface WaterAdditionType {
    amount: VolumeType,
}