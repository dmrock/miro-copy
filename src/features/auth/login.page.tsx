import { ROUTES } from '@/shared/model/routes';
import { Link } from 'react-router-dom';
import { AuthLayout } from './ui/auth-layout';
import { LoginForm } from './ui/login-form';

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
