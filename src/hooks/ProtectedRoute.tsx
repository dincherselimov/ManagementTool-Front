import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react'; 
import { useAuth } from './useAuth';

interface ProtectedRouteProps {
  children: ReactNode; 
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
