// components/ProtectedRoute.js
import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react'; // Import ReactNode type
import { useAuth } from '../hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode; // Explicitly define children prop type
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
