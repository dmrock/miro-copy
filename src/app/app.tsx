import { AppHeader } from '@/features/header';
import { ROUTES } from '@/shared/model/routes';
import { Outlet, useLocation } from 'react-router-dom';

export function App() {
  const location = useLocation();

  const isAuthPage = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER;

  return (
    <div className="min-h-screen flex flex-col bg-[#ff8c69]">
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}
