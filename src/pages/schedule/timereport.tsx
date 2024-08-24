import { useEffect } from 'react';
import TimeReportComponent from "@/components/TimeReport";
import router from "next/router";
import Layout from '../posts/Layout';

export default function TimeReport() {
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
      router.push('/authentication/login');
    }
  }, []); 

  return (
    <Layout>
      <TimeReportComponent />
    </Layout>
  )
}
