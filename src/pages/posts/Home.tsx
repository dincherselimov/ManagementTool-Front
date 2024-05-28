import Categories from '@/components/Categories';
import Layout from './Layout';
import Intro from '@/components/Intro';

/**
 * This should be the navbar
 * For MVP it is done as home page
 * @returns 
 */
export default function Home() {
  return (

    <Layout>
        <Intro/>
        <Categories/>
    </Layout>
);
}
