export const FETCH_INIT = 'FETCH_INIT';
export type FETCH_INIT = typeof FETCH_INIT;

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export type FETCH_SUCCESS = typeof FETCH_SUCCESS;

export const FETCH_ERROR = 'FETCH_ERROR';
export type FETCH_ERROR = typeof FETCH_ERROR;

export interface openingHoursSchema {
  label: string,
  openingHours: Array<any>
}