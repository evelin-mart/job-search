import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PageLayout } from '../layout';
import { FavoritesPage, MainPage, VacancyPage } from '../../pages';

enum ROUTES {
    HOME = '/',
    FAVORITE = '/favorite',
    VACANCY = '/:id',
}

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
