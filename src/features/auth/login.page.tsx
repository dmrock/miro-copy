import { ROUTES } from '@/shared/model/routs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/kit/card';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <main className="grow flex flex-col pt-[200px] items-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>Log in</CardTitle>
          <CardDescription>Enter your email and password</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <p>
            Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}

export const Component = LoginPage;
