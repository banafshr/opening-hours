import { networkInterfaces } from 'os';
import * as types from './types';


export interface FetchInit {
  type: types.FETCH_INIT;
  payload: Array<any>
}
export interface FetchSuccess {
  type: types.FETCH_SUCCESS;
  payload: Array<types.openingHoursSchema>;
}
export interface FetchError {
  type: types.FETCH_ERROR;
  payload: Array<object>;
}


export const fetchInit = (payload: Array<any>): FetchInit => ({
  type: types.FETCH_INIT,
  payload
});
export const fetchSucess = (payload: Array<types.openingHoursSchema>): FetchSuccess => 
({
  payload,
  type: types.FETCH_SUCCESS,
});
export const fetchError = (payload: Array<object>): FetchError => ({
  type: types.FETCH_ERROR,
  payload,
});

export type TAction = FetchInit | FetchSuccess | FetchError;