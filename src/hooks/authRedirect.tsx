import { useEffect } from 'react';
import { useRouter, } from 'next/router';

export const RedirectIfAuthenticated = (isAuthenticated: unknown, destination = '/') => {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(destination);
    }
  }, [isAuthenticated, destination, router]);
};
