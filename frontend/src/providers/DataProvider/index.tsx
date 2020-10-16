import React, { FC, useReducer } from 'react';
import initialState from 'store/initialState';
import reducer from 'store/reducer';
import Context from './Context';


const DataProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default DataProvider;
