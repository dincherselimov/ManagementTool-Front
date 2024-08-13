import { getUserTimeReports } from '@/pages/api/getUserTimeReports';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Parser } from 'json2csv';

interface TimeReport {
    id: number;
    name: string;
    start_time: string;
    end_time: string;
    description: string;
    total_hours_for_day: number;
    date: string;
}

const ListUserTimeReports = () => {
    const [timeReports, setTimeReports] = useState<TimeReport[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserTimeReports();
                setTimeReports(data);
                setLoading(false);
            } catch (error: any) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
      
    };

    const handleUpdate = async(id: number) => {

    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const generateFile = () => {
        const fields = ['name', 'start_time', 'end_time', 'description', 'total_hours_for_day', 'date'];
        const opts = { fields };
        try {
            const parser = new Parser(opts);
            const csv = parser.parse(timeReports);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', 'time_reports.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div className='main-container'>
                <h1 className='title'>Your Personal Time Reports</h1>
                <div className="container-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="header">Name</th>
                                <th className="header">Start Time</th>
                                <th className="header">End Time</th>
                                <th className="header">Description</th>
                                <th className="header">Total Hours</th>
                                <th className="header">Date D/M/Y</th>
                                <th className="header">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeReports.map((report) => (
                                <tr key={report.id} className="row">
                                    <td className="cell">{report.name}</td>
                                    <td className="cell">{report.start_time}</td>
                                    <td className="cell">{report.end_time}</td>
                                    <td className="cell">{report.description}</td>
                                    <td className="cell">{report.total_hours_for_day}</td>
                                    <td className="cell">{formatDate(report.date)}</td>
                                    <td className="cell">
                                        <button 
                                            className="delete-button" 
                                            onClick={() => handleDelete(report.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    <td className="cell">
                                        <button 
                                            className="update-button" 
                                            onClick={() => handleUpdate(report.id)}
                                        >
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link className='add-report-button' href={"/schedule/timereport"}>Add Time Report</Link>
                    <button className='generate-file-button' onClick={generateFile}>Generate File</button>
                </div>
            </div>
        </div>
    );
};

export default ListUserTimeReports;
