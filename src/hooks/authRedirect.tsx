import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const redirectIfAuthenticated = (isAuthenticated: unknown, destination = '/') => {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(destination);
    }
  }, [isAuthenticated, destination, router]);
};
