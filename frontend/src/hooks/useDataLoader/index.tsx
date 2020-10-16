import { useContext, useCallback } from 'react';
import * as types from 'store/types';
import Context from 'providers/DataProvider/Context';

const useDataLoader = () => {
  const context = useContext(Context);
  const { state, dispatch } = context;

  const fetchOpeningHours = useCallback(
    async (url) => {
      const didCancel = false;
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (!didCancel) {
          dispatch({ type: types.FETCH_SUCCESS, payload: json });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: types.FETCH_ERROR, payload: error });
        }
      }
    },
    [dispatch]
  );

  return [state, fetchOpeningHours] as const;
};

export default useDataLoader;
