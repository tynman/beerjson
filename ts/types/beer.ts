import { VersionType } from "./measureable_units";
import { FermentableType } from "./fermentable";
import { MiscellaneousType } from "./misc";
import { VarietyInformation } from "./hop";
import { CultureInformation } from "./culture";
import { WaterType } from "./water";
import { StyleType } from "./style";
import { MashProcedureType } from "./mash";
import { FermentationProcedureType } from "./fermentation";
import { RecipeType } from "./recipe";
import { EquipmentType } from "./equipment";
import { BoilProcedureType } from "./boil";
import { PackagingProcedureType } from "./packaging";

/// Schema: http://json-schema.org/draft-04/schema
/// id: https://raw.githubusercontent.com/beerjson/beerjson/master/json/beer.json
/// Description: Root element of all beerjson documents.
export interface IBeer {
    /// Explicitly encode beerjson version within list of records.
    version: VersionType
    /// Records for any ingredient that contributes to the gravity of the beer.
    fermentables?: Array<FermentableType>,
    /// Records for adjuncts which do not contribute to the gravity of the beer.
    miscellaneous_ingredients?: Array<MiscellaneousType>,
    /// Records detailing the many properties of unique hop varieties.
    hop_varieties?: Array<VarietyInformation>,
    /// Records detailing the wide array of unique cultures.
    cultures?: Array<CultureInformation>,
    /// Records for regional water profiles used in style-specific beer brewing.
    profiles?: Array<WaterType>,
    /// Records detailing the characteristics of the beer styles for which judging guidelines have been established.
    styles?: Array<StyleType>,
    /// A collection of steps providing process information for common mashing procedures.
    mashes?: Array<MashProcedureType>,
    /// A collection of steps providing process information for common fermentation procedures.
    fermentations?: Array<FermentationProcedureType>,
    /// Records containing a minimal collection of the description of ingredients, procedures and other required parameters necessarto recreate a batch of beer.",
    recipes?: Array<RecipeType>,
    /// Provides necessary information for brewing equipment.
    equipments?: Array<EquipmentType>,
    /// A collection of steps providing process information for common boil procedures.
    boil?: Array<BoilProcedureType>,
    /// A collection of steps providing process information for common packaging procedures.
    packaging?: Array<PackagingProcedureType>,
}