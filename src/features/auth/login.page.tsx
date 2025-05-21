import { ROUTES } from '@/shared/model/routs';
import { Link } from 'react-router-dom';
import { AuthLayout } from './auth-layout';
import { LoginForm } from './login-form';

function LoginPage() {
  return (
    <AuthLayout
      title="Log in"
      description="Enter your email and password"
      form={<LoginForm />}
      footerText={
        <>
          Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
        </>
      }></AuthLayout>
  );
}

export const Component = LoginPage;
