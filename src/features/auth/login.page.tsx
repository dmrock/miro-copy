import { ROUTES } from '@/shared/model/routs';
import { Link } from 'react-router-dom';
import { AuthLayout } from './auth-layout';

function LoginPage() {
  return (
    <AuthLayout
      title="Log in"
      description="Enter your email and password"
      form={<form></form>}
      footerText={
        <>
          Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
        </>
      }></AuthLayout>
  );
}

export const Component = LoginPage;
