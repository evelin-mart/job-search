import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants';
import styles from './navigation.styles.module.css';
import { useLocation } from 'react-router';
import classNames from 'classnames';

export const Navigation = () => {
    const { pathname } = useLocation();
    return (
        <>
            <NavLink
                className={classNames(styles.link, {
                    [styles.active]: pathname === ROUTES.HOME || pathname.match('vacancies'),
                })}
                to={ROUTES.HOME}
            >
                Поиск Вакансий
            </NavLink>
            <NavLink
                className={classNames(styles.link, {
                    [styles.active]: pathname === ROUTES.FAVORITE,
                })}
                to={ROUTES.FAVORITE}
            >
                Избранное
            </NavLink>
        </>
    );
};
