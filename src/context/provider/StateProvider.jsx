import { useReducer, useEffect } from 'react'
import AppContext from '../store'
import { reducer, initialState } from '../../components/card/Card'

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const localData = localStorage.getItem('appState');
    return localData ? JSON.parse(localData) : initial;
  });

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export default StateProvider;