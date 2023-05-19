import { Provider } from 'react-redux';
import { RootRouter } from '../router';
import { store } from '../../store';

export const App = () => {
    return (
        <Provider store={store}>
            <RootRouter />
        </Provider>
    );
};
