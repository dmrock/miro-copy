import { ROUTES } from '@/shared/model/routs';
import { Link } from 'react-router-dom';
import { AuthLayout } from './auth-layout';
import { RegisterForm } from './register-form';

function RegisterPage() {
  return (
    <AuthLayout
      title="Register"
      description="Enter your email and password"
      form={<RegisterForm />}
      footerText={
        <>
          Already have an account? <Link to={ROUTES.LOGIN}>Log in</Link>
        </>
      }></AuthLayout>
  );
}

export const Component = RegisterPage;
