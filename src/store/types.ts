export const FETCH_INIT = 'FETCH_INIT';
export type FETCH_INIT = typeof FETCH_INIT;

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;

export const FETCH_ERROR = 'FETCH_ERROR';
export type FETCH_ERROR = typeof FETCH_ERROR;


interface openingHoursDaySchema {
  type: string,
  value: number
}

export interface openingHoursSchema {
  monday: openingHoursDaySchema,
  tuesday: openingHoursDaySchema,
  wednesday: openingHoursDaySchema,
  thursday: openingHoursDaySchema,
  friday: openingHoursDaySchema,
  saturday: openingHoursDaySchema,
  sunday: openingHoursDaySchema
}