export interface NumericTypeBase<T> {
    unit: T,
    value: number,
}

/// UNDONE: DensityType is missing from the original spec. Should create a Pull Request.
export interface DensityType extends NumericTypeBase<DensityUnitType> {}
export interface VolumeType extends NumericTypeBase<VolumeUnitType> {}
export interface MassType extends NumericTypeBase<MassUnitType>{}
export interface DiastaticPowerType extends NumericTypeBase<DiastaticPowerUnitType>{}
export interface TemperatureType extends NumericTypeBase<TemperatureUnitType>{}
export interface PressureType extends NumericTypeBase<PressureUnitType>{}
export interface AcidityType extends NumericTypeBase<AcidityUnitType>{}
export interface TimeType extends NumericTypeBase<TimeUnitType>{}
export interface ColorType extends NumericTypeBase<ColorUnitType>{}
export interface CarbonationType extends NumericTypeBase<CarbonationUnitType>{}
export interface BitternessType extends NumericTypeBase<BitternessUnitType>{}
export interface GravityType extends NumericTypeBase<GravityUnitType>{}
export interface SpecificHeatType extends NumericTypeBase<SpecificHeatUnitType>{}
export interface ConcentrationType extends NumericTypeBase<ConcentrationUnitType>{}
export interface SpecificVolumeType extends NumericTypeBase<SpecificVolumeUnitType>{}
export interface UnitType extends NumericTypeBase<UnitUnitType>{}

export interface RangeTypeBase<T> {
    minimum: T,
    maximum: T,
}

export interface CarbonationRangeType extends RangeTypeBase<CarbonationType> {}

export interface BitternessRangeType extends RangeTypeBase<BitternessType> {}
export interface TemperatureRangeType extends RangeTypeBase<TemperatureType> {}
export interface ColorRangeType extends RangeTypeBase<ColorType> {}
export interface GravityRangeType extends RangeTypeBase<GravityType> {}
export interface PercentRangeType extends RangeTypeBase<PercentType> {}


export enum VolumeUnitType {
    "ml",
    "l",
    "tsp",
    "tbsp",
    "floz",
    "cup",
    "pt",
    "qt",
    "gal",
    "bbl",
    "ifloz",
    "ipt",
    "iqt",
    "igal",
    "ibbl",
}
export enum MassUnitType {"mg", "g", "kg", "lb", "oz"}
export enum DiastaticPowerUnitType {"Lintner", "WK"}
export enum TemperatureUnitType {"C", "F"}
export enum AcidityUnitType {"pH"}


export enum PressureUnitType {"kPa", "psi", "bar"}
export enum TimeUnitType {"sec", "min", "hr", "day", "week", "month", "year"}
export enum ColorUnitType {"EBC", "Lovi", "SRM"}
export enum CarbonationUnitType {"vols"}
export enum BitternessUnitType {"IBUs"}
export enum GravityUnitType {"sg", "plato", "brix"}
export enum DensityUnitType {"sg", "plato", "brix"}
export enum ConcentrationUnitType {"ppm", "ppb", "mg/l"}
export enum SpecificHeatUnitType {"Cal/(g C)", "J/(kg K)", "BTU/(lb F)"}
export enum SpecificVolumeUnitType {
    "qt/lb",
    "gal/lb",
    "gal/oz",
    "l/g",
    "l/kg",
    "floz/oz",
    "m^3/kg",
    "ft^3/lb",
}

/// UNDONE: "one" was originally "1". Will need to write converters
export enum UnitUnitType {"one", "unit", "each", "dimensionless"}
/// UNDONE: Technically DateType is a string 
export class DateType extends String {}
export const DateTimeMatcher = RegExp("\\d{4}-\\d{2}-\\d{2}|\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}");

export interface PercentType extends NumericTypeBase<PercentUnitType> {}
export enum PercentUnitType {"%"}

export enum QualitativeRangeType {
    "very low",
    "low",
    "medium low",
    "medium",
    "medium high",
    "high",
    "very high",
}


export class VersionType extends Number {}