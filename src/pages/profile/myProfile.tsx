import ListUserTimeReports from "@/components/listUserTimeReports";
import Layout from "../posts/Layout";
import { useEffect } from "react";
import router from "next/router";


export default function MyProfile() {
    
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
    
        if (!isAuthenticated) {
          router.push('/authentication/login');
        }
      }, []); // Empty dependency array to run this effect only once on component mount

      
  return (
    <Layout>
     <ListUserTimeReports/>
    </Layout>
  );
}
