import { Provider } from 'react-redux';
import { RootRouter } from '../router';
import { getVacancies, store } from '../../store';
import { useEffect } from 'react';

export const App = () => {
    useEffect(() => {
        store.dispatch(getVacancies({}));
    }, []);

    return (
        <Provider store={store}>
            <RootRouter />
        </Provider>
    );
};
