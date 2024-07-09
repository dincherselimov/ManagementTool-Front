import React, { useEffect, useState } from 'react';

interface PlannerItem {
    id: number;
    name: string;
    model: string;
    original_price: number;
    sell_price: number;
}

export default function PlannerComponent() {
    const [data, setData] = useState<PlannerItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/api/planner');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error:any) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Priginal Price</th>
                        <th>Sell Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.model}</td>
                            <td>{item.original_price}</td>
                            <td>{item.sell_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}
