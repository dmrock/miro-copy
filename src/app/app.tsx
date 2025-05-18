import { AppHeader } from '@/features/header';
import { ROUTES } from '@/shared/model/routs';
import { Outlet, useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  return (
    <div className="bg-gray_100">
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}
