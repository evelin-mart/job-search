import { Provider } from 'react-redux';
import { RootRouter } from '../router';
import { getVacancies, store } from '../../store';
import { useEffect } from 'react';
import { saveFavoritesToLocalStorage } from '../../utils';
import { ThemeProvider } from '../theme';

export const App = () => {
    useEffect(() => {
        store.dispatch(getVacancies({}));

        const onUnload = () => {
            saveFavoritesToLocalStorage(store.getState().favorites);
        };

        window.addEventListener('beforeunload', onUnload);

        return () => {
            window.removeEventListener('beforeunload', onUnload);
        };
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider>
                <RootRouter />
            </ThemeProvider>
        </Provider>
    );
};
