import { Navigate, Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PageLayout } from '../layout';
import { FavoritesPage, MainPage, VacancyPage } from '../../pages';
import { ROUTES } from '../../constants';

export const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={ROUTES.HOME}
                    element={
                        <PageLayout>
                            <Outlet />
                        </PageLayout>
                    }
                >
                    <Route index element={<MainPage />} />
                    <Route path={ROUTES.FAVORITE} element={<FavoritesPage />} />
                    <Route path={ROUTES.VACANCY} element={<VacancyPage />} />
                    <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
