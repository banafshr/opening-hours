import {openingHoursSchema} from './types'
export interface IState {
  openingHours: Array<openingHoursSchema>;
  error: string | boolean | Array<any>;
  isLoading: boolean;
}

const initialState: IState = {
  error: false,
  isLoading: true,
  openingHours: []
};

export default initialState;
