import AllTimeReports from "@/components/ListAllTimeReports";
import Layout from "./Layout";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Features from "@/components/Features";


export default function Home() {

  return (
    <Layout>
      {/* <AllTimeReports/> */}
      <Hero/>
      <Overview/>
      <Features/>
    </Layout>
  );
}