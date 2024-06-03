import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define an interface representing the structure of the time report data
interface TimeReport {
  name: string;
  start_time: string;
  end_time: string;
  description: string;
  total_hours_for_day: number;
  date: string;
}

const AllTimeReports = () => {
  const [timeReports, setTimeReports] = useState<TimeReport[]>([]); // Specify the type of timeReports as an array of TimeReport

  useEffect(() => {
    const fetchTimeReports = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getAllReports');
        if (!response.ok) {
          throw new Error('Failed to fetch time reports');
        }
        const data = await response.json();
        setTimeReports(data);
      } catch (error) {
        console.error('Error fetching time reports:', error);
      }
    };

    fetchTimeReports();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};


  return (
    <div className='main-container'>
        <h1 className="title">All Time Reports</h1>
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
        </tr>
      </thead>
      <tbody>
        {timeReports.map((report, index) => (
          <tr key={index} className="row">
            <td className="cell">{report.name}</td>
            <td className="cell">{report.start_time}</td>
            <td className="cell">{report.end_time}</td>
            <td className="cell">{report.description}</td>
            <td className="cell">{report.total_hours_for_day}</td>
            <td className="cell">{formatDate(report.date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  );
};

export default AllTimeReports;


