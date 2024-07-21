import React, { useEffect, useState } from 'react';
import Layout from '../posts/Layout';
import PlannerComponent from '@/components/PlannerComponent';

export default function Planner() {
 
    return (
        <Layout>
            <PlannerComponent></PlannerComponent>
        </Layout>
    );
}
